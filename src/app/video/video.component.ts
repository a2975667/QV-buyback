import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { VideoService } from '../services/video.service';
import { timer, Observable, Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Video } from '../schema/video';
import * as Survey from 'survey-angular';
import { Options } from 'ng5-slider';
import { HttpClient } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('videoPlayer', { static: false }) videoPlayer: ElementRef;
  @ViewChild('videoOverlay', { static: false }) videoOverlay: ElementRef;
  @ViewChild('audioPlayer', { static: false }) audioPlayer: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;

  clicked = false;
  survey: object;
  canvasElement: HTMLCanvasElement;
  videoOverlayElement: HTMLDivElement;
  videoElement: HTMLVideoElement;
  audioElement: HTMLAudioElement;
  videoContainer = {  // we will add properties as needed
    video: null,
    ready: false,
    scale: null,
  };
  videoFilePrefix = environment.apiUrl + '/api/video/';
  videoSrc = '';

  audioFilePrefix = environment.apiUrl + '/api/audio/';
  audioSrc = '';

  configurations = {
    'Audio Quality': '0',
    'Video Resolution': '0',
    'Audio Stability': '0',
    'Motion Smoothness': '0',
    'Audio-Video Synchronization': '0',
  };

  videoIsPlaying = false;

  objectKeys = Object.keys;

  formJson: any;

  blackTimer: Observable<number>;
  videoTimerSubscription: Subscription;

  muteTimer: Observable<number>;
  audioTimerSubscription: Subscription;

  description: string;
  title: string;

  videoIsJittering = false;
  jitterTempData = null;

  showCost = false;
  showConfig = false;
  showDemoConfig = false;
  showFullConfig = false;
  sliderOptions: Options = {
    showTicksValues: true,
    animate: false,
    stepsArray: [
      { value: 0, legend: 'As is' },
      { value: 1, legend: 'Lv. 1' },
      { value: 2, legend: 'Lv. 2' },
      { value: 3, legend: 'Lv. 3' }
    ],
    disabled: false,
  };

  priceSliderOptions: Options = {
    showTicksValues: false,
    animate: false,
    floor: 0,
    ceil: 4,
    step: 0.01
  };

  saveApply = {
    save: false,
    apply: false,
  };

  priceArray = {
    'Audio Quality': 0,
    'Video Resolution': 0,
    'Audio Stability': 0,
    'Motion Smoothness': 0,
    'Audio-Video Synchronization': 0,
  };
  counter = 0;
  completeFunc: () => boolean;
  requestUrl: string = environment.apiUrl;
  showPanel: boolean;

  currentVideoRequestId: number;

  reasonArray = {};
  showHintForFillingReasons = false;
  noNeedToFillReasons = true;

  isAudioLoaded = true;
  isVideoLoaded = true;
  get isAllReasonFilled() {
    return Object.keys(this.reasonArray).length === 5
      && Object.values(this.reasonArray).filter(v => v === null || v === undefined || String(v).length === 0).length === 0;
  }

  constructor(
    private http: HttpClient,
    private vService: VideoService,
    private cookieService: CookieService,
    private numberPipe: DecimalPipe,
    private route: Router,
  ) { }

  sumUpCost: (any) => number = (arr) => Number(Object.values(arr).reduce((a, b) => (Number(a) + Number(b))));
  getSurvey(survey: Survey.Model) {
    this.completeFunc = survey.completeLastPage.bind(survey);
  }

  jitterVideo(jitterVal: number) {
    if (this.videoTimerSubscription) {
      this.videoTimerSubscription.unsubscribe();
    }
    switch (jitterVal) {
      case 0:
        // play every 6 secs, pause 1.5 secs
        // this.blackTimer = timer(0, 6000);
        this.blackTimer = timer(0, 2836); // 22%
        break;
      case 1:
        // play every 16.5 secs, pause 1.5 secs
        // this.blackTimer = timer(0, 16500);
        this.blackTimer = timer(0, 9200); // 8% loss
        break;
      case 2:
        // play every 43.5 secs, pause 1.5 secs, stopping twice essentially
        // this.blackTimer = timer(0, 1000000);
        this.blackTimer = timer(0, 19200); // 4% loss
        break;
      case 3:
        // this.blackTimer = timer(0, 1000000);
        this.blackTimer = timer(0, 1000000);
        break;
    }
    this.videoTimerSubscription = this.blackTimer.subscribe(val => {
      if (this.videoIsPlaying) {
        this.videoIsJittering = true;
        const freshback = timer(800);
        // const freshback = timer(1500);
        freshback.subscribe(d => {
          this.videoIsJittering = false;
        });
      }
    });
  }

  jitterAudio(jitterVal: number) {
    if (this.audioTimerSubscription) {
      this.audioTimerSubscription.unsubscribe();
    }
    switch (jitterVal) {
      case 0:
        // play every 6 secs, pause 1.5 secs
        // this.muteTimer = timer(0, 6000);
        this.muteTimer = timer(0, 3200); // 20%
        break;
      case 1:
        // play every 13.5 secs, pause 1.5 secs
        // this.muteTimer = timer(0, 13500);
        this.muteTimer = timer(0, 7200); // 10% loss
        break;
      case 2:
        // play every 28.5 secs, pause 1.5 secs, stopping 3 times essentially
        // this.muteTimer = timer(0, 28500);
        this.muteTimer = timer(0, 15200); // 5% loss
        break;
      case 3:
        this.muteTimer = timer(0, 10000000); // 0% loss
        break;
    }
    this.audioTimerSubscription = this.muteTimer.subscribe(val => {
      if (this.videoIsPlaying) {
          this.audioElement.volume = 0;
          const freshback = timer(800);
          freshback.subscribe(d => {
          if (this.videoIsPlaying) {
            this.audioElement.volume = 1;
          }
        });
      }
    });
  }

  syncAudioWithVideo() {
    const syncAudioWithVideoValue = Number(this.configurations['Audio-Video Synchronization']);
    switch (syncAudioWithVideoValue) {
      case 0:
        this.audioElement.currentTime = this.videoElement.currentTime - 2;
        break;
      case 1:
        this.audioElement.currentTime = this.videoElement.currentTime - 1.250;
        break;
      case 2:
        this.audioElement.currentTime = this.videoElement.currentTime - 0.750;
        break;
      case 3:
        this.audioElement.currentTime = this.videoElement.currentTime;
        break;
    }
  }

  renderTableTitle(num?) {
    if (this.saveApply.save || this.saveApply.apply) {
      return `Quality ${num}`;
    } else {
      return 'Levels of configuration';
    }
  }

  refreshPlayback() {
    const that = this;
    this.videoIsPlaying = true;
    this.unsubscribeServices();
    this.reassignVideoSrc();
    this.syncAudioWithVideo();
    this.audioElement.addEventListener('loadeddata', () => {
      this.isAudioLoaded = true;
      if (this.isAudioLoaded && this.isVideoLoaded) {
        this.sliderOptions = {...this.sliderOptions, disabled: false};
        if (that.counter !== 0) {
          that.videoElement.play();
          that.audioElement.play();
        }
        that.counter++;
      }
    });
    this.videoElement.addEventListener('loadeddata', function() {
      that.isVideoLoaded = true;
      if (that.isAudioLoaded && that.isVideoLoaded) {
        that.sliderOptions = {...that.sliderOptions, disabled: false};
        if (that.counter !== 0) {
          that.videoElement.play();
          that.audioElement.play();
        }
        that.counter++;
      }
      if (that.currentVideoRequestId) {
        cancelAnimationFrame(that.currentVideoRequestId);
      }
      const ctx = that.canvasElement.getContext('2d');
      that.videoContainer.scale = Math.min(
        ctx.canvas.width / this.videoWidth,
        ctx.canvas.height / this.videoHeight);
      that.videoContainer.ready = true;
      that.currentVideoRequestId = requestAnimationFrame(that.updateCanvas.bind(that));
    }, false);
  }

  reassignVideoSrc() {
    const time = Date.now();
    const userID = this.cookieService.get('user_id');
    this.videoSrc =
      this.videoFilePrefix
      + this.formJson.filename
      + '-vq'
      + this.configurations['Video Resolution']
      + '-f'
      + this.configurations['Motion Smoothness']
      + '.webm';
    this.audioSrc =
      this.audioFilePrefix
      + this.formJson.filename
      + '-aq'
      + this.configurations['Audio Quality']
      + '-l'
      + this.configurations['Audio Stability']
      + '.m4a';
    const videoTempTime = this.videoElement.currentTime;
    const audioTempTime = this.audioElement.currentTime;
    this.videoElement.src = this.videoSrc;
    this.audioElement.src = this.audioSrc;
    this.isVideoLoaded = false;
    this.isAudioLoaded = false;
    this.sliderOptions = {...this.sliderOptions, disabled: true};
    this.videoElement.currentTime = videoTempTime;
    this.audioElement.currentTime = audioTempTime;
  }

  unsubscribeServices() {
    if (this.audioTimerSubscription) {
      this.audioTimerSubscription.unsubscribe();
    }
    if (this.videoTimerSubscription) {
      this.videoTimerSubscription.unsubscribe();
    }
  }

  updateCanvas() {
    this.canvasElement = this.canvas.nativeElement;
    const ctx = this.canvasElement.getContext('2d');
    if (!this.videoIsJittering) {
      ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    }
    if (this.videoContainer !== undefined && this.videoContainer.ready) {
      // find the top left of the video on the canvas
      const scale = this.videoContainer.scale;
      const vidH = this.videoContainer.video.videoHeight;
      const vidW = this.videoContainer.video.videoWidth;
      const top = ctx.canvas.height / 2 - (vidH / 2) * scale;
      const left = ctx.canvas.width / 2 - (vidW / 2) * scale;
      if (!this.videoIsJittering) {
        ctx.drawImage(this.videoContainer.video, left, top, vidW * scale, vidH * scale);
        if (this.videoContainer.video.paused) {
          this.drawPayIcon();
        }
      }
    }
    this.currentVideoRequestId = requestAnimationFrame(this.updateCanvas.bind(this));
  }

  onRadioCheck() {
    this.refreshPlayback();
  }

  onCheckboxClick(value, key) {
      const table = {
          'Audio Quality': [0, 1],
          'Video Resolution': [0, 2],
          'Audio Stability': [0, 1],
          'Motion Smoothness': [0, 1],
          'Audio-Video Synchronization': [0, 3],
      };
      if (value) {
          this.configurations[key] = table[key][0];
      } else {
          this.configurations[key] = table[key][1];
      }
      this.refreshPlayback();
  }

  playPause() {
    if (this.videoIsPlaying) {
      this.audioElement.pause();
      this.videoElement.pause();
      this.videoIsPlaying = false;
    } else {
      this.audioElement.play();
      this.videoElement.play();
      this.videoIsPlaying = true;
    }
  }

  ngOnInit() {
    this.vService.requestForm();
    this.vService.videoForm.subscribe((data: Video) => {
      if (data) {
        this.formJson = data;
        this.survey = {
          questions: data.settings.normal,
          showNav: false,
        };
        this.saveApply = {
          save: data.settings.save,
          apply: data.settings.apply,
        };
        if (this.saveApply.apply) {
          this.noNeedToFillReasons = false;
          this.configurations = JSON.parse(this.cookieService.get('video_config'));
        }
        const userID = this.cookieService.get('user_id');
        this.description = data.Description;
        this.title = data.Title;
        this.showCost = data.settings.control_panel_has_price;
        this.showConfig = data.settings.control_panel_can_change;
        this.showDemoConfig = data.settings.showDemoConfig;
        this.showFullConfig = data.settings.showFullConfig;
        const time = Date.now().toString();
        this.videoSrc =
          this.videoFilePrefix + this.formJson.filename + '-vq' +
          this.configurations['Video Resolution'] + '.webm';
        this.audioSrc =
          this.audioFilePrefix + this.formJson.filename + '-av' +
          this.configurations['Audio Quality'] + '.m4a';
        this.videoElement.src = this.videoSrc;
        this.audioElement.src = this.audioSrc;
        this.isVideoLoaded = false;
        this.isAudioLoaded = false;
        this.sliderOptions = {...this.sliderOptions, disabled: true};
        this.showPanel =  data.settings.control_panel_can_change;
        this.refreshPlayback();
      }
    });
  }

  fetchCheckBoxStatus(key) {
    return +this.configurations[key] > 0;
  }

  decidePath() {
    const pathIndex = Number(this.cookieService.get('user_current_path_index'));
    const pathArray: Array<object> = JSON.parse(this.cookieService.get('user_path'));
    const type: string = pathArray[pathIndex]['type'];
    if (type === 'normal') {
      this.route.navigate(['likert']);
    } else if (type === 'qv') {
      this.route.navigate(['qv']);
    } else if (type === 'video') {
      this.route.navigate(['video']).then(() => location.reload());
    } else if (type === 'complete') {
      const userId = this.cookieService.get('user_id');
      this.cookieService.deleteAll('/');
      const file = pathArray[pathIndex]['file'];
      this.http.post(`${this.requestUrl}/submit`, {userId, complete: true}).subscribe(d => {
        this.http.get(`${this.requestUrl}/thank_you/${file}`).subscribe(
          thankYouData => {
            this.route.navigate(['complete', { userId, ...thankYouData }]);
          }
        );
      });
    }
  }

  ngOnDestroy() {
    this.videoSrc = '';
    this.audioSrc = '';
    this.videoElement.src = this.videoSrc;
    this.audioElement.src = this.audioSrc;
    this.audioElement.pause();
    this.videoElement.pause();
    this.unsubscribeServices();
    this.videoElement.remove();
    this.audioElement.remove();
    this.videoIsPlaying = false;
  }

  ngAfterViewInit() {
    this.videoElement = this.videoPlayer.nativeElement;
    this.audioElement = this.audioPlayer.nativeElement;
    this.videoOverlayElement = this.videoOverlay.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.videoContainer.video = this.videoElement;
  }

  submit(e: Event) {
    if (this.completeFunc) {
      this.completeFunc();
    } else {
      this.surveySubmit(null);
    }
  }

  surveySubmit(data) {
    if (this.isAllReasonFilled || this.noNeedToFillReasons) {
      this.clicked = true;
      this.videoElement.pause();
      if (this.saveApply.save) {
        this.cookieService.set(
          'video_config',
          JSON.stringify(this.configurations),
          undefined,
          '/',
          undefined,
          false,
          'Lax'
          );
      }
      this.vService.submit({
        videoConfig: this.configurations,
        counter: this.counter,
        data,
        reasonArray: this.reasonArray,
        priceArray: this.priceArray}).subscribe(
        result => {
          this.decidePath();
        }
      );
      this.showHintForFillingReasons = false;
    } else {
      this.showHintForFillingReasons = true;
    }
  }

  // implementation based on https://stackoverflow.com/questions/38710125/how-do-i-display-a-video-using-html5-canvas-tag
  drawPayIcon() {
    this.canvasElement = this.canvas.nativeElement;
    const ctx = this.canvasElement.getContext('2d');
    const canvas = this.canvasElement;
    ctx.fillStyle = 'black';  // darken display
    ctx.globalAlpha = 0.5;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#DDD'; // colour of play icon
    ctx.globalAlpha = 0.75; // partly transparent
    ctx.beginPath(); // create the path for the icon
    const size = (canvas.height / 2) * 0.5;  // the size of the icon
    ctx.moveTo(canvas.width / 2 + size / 2, canvas.height / 2); // start at the pointy end
    ctx.lineTo(canvas.width / 2 - size / 2, canvas.height / 2 + size);
    ctx.lineTo(canvas.width / 2 - size / 2, canvas.height / 2 - size);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1; // restore alpha
  }

  priceArrayChange(priceIndex: number, event: any) {
    const numValue = Number(event.target.value);
    if ((event.target.value as string).toLowerCase().includes('e')) {
      event.target.value = +this.numberPipe.transform(0, '1.2-2');
    } else {
      if (numValue > 4) {
        this.priceArray[priceIndex] = 4;
        event.target.value = +this.numberPipe.transform(4, '1.2-2');
      } else if (numValue < 0) {
        this.priceArray[priceIndex] = 0;
        event.target.value = +this.numberPipe.transform(0, '1.2-2');
      } else {
        event.target.value = +this.numberPipe.transform(event.target.value, '1.2-2');
        this.priceArray[priceIndex] = +event.target.value;
      }
    }
  }
}
