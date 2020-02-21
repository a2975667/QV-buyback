import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { VideoService } from '../services/video.service';
import { timer, Observable, Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Video } from '../schema/video';
import * as Survey from "survey-angular";
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @ViewChild('videoPlayer', {static: false}) videoPlayer: ElementRef;
  @ViewChild('videoOverlay', {static: false}) videoOverlay: ElementRef;
  @ViewChild('audioPlayer', {static: false}) audioPlayer: ElementRef;
  @ViewChild('canvas', {static: false}) canvas: ElementRef;

  clicked: boolean = false;
  survey: object;
  canvasElement: HTMLCanvasElement;
  videoOverlayElement: HTMLDivElement;
  videoElement: HTMLVideoElement;
  audioElement: HTMLAudioElement;
  videoContainer = {  // we will add properties as needed
    video : this.videoElement,
    ready : false,
    scale: null,
  };
  videoFilePrefix = environment.apiUrl+"/api/video/";
  videoSrc = "";

  audioFilePrefix = environment.apiUrl+"/api/audio/";
  audioSrc = "";

  configurations = {
    "Audio Quality": '0',
    "Video Quality": '0',
    "Audio Stability": '0',
    "Video Stability": '0',
    "Audio-Video Synchronization": '0',
  }

  videoIsPlaying=false;

  objectKeys = Object.keys;

  videoConfig = new Array(4).fill(0);
  videoConfigLength = new Array(4).fill(0);
  sumUpCost = (arr) => {return arr.reduce((a, b) => a + b)}
  formJson: Object;

  blackTimer: Observable<number>;
  videoTimerSubscription: Subscription;

  muteTimer: Observable<number>;
  audioTimerSubscription: Subscription;

  description: String;
  title: String;

  videoIsJittering = false;
  jitterTempData = null;

  showCost = false;
  showConfig = false;
  sliderOptions: Options = {
    showTicksValues: true,
    stepsArray: [
      {value: 0, legend: 'As is'},
      {value: 1, legend: 'Lv. 1'},
      {value: 2, legend: 'Lv. 2'},
      {value: 3, legend: 'Lv. 3'}
    ]
  };
  //videoConfigText = ["UnChanged","Slightly Enhanced","Enhanced","Perfected"];

  constructor(
    private vService: VideoService,
    private cookieService: CookieService,
    private route: Router,
    ) { }

  completeFunc: Function;
  getSurvey(survey: Survey.Model){
    this.completeFunc = survey.completeLastPage.bind(survey);
  }

  jitterVideo(jitterVal: number) {
    if(this.videoTimerSubscription){
      this.videoTimerSubscription.unsubscribe();
    }
    switch (jitterVal) {
      case 0:
        // play every 6 secs, pause 1.5 secs
        this.blackTimer = timer(0, 6000);
        break;
      case 1:
        // play every 16.5 secs, pause 1.5 secs
        this.blackTimer = timer(0, 16500);
        break;
      case 2:
        // play every 43.5 secs, pause 1.5 secs, stopping twice essentially
        this.blackTimer = timer(0, 43500);
        break;
      case 3:
        this.blackTimer = timer(0, 1000000);
        break;
    }
    this.videoTimerSubscription = this.blackTimer.subscribe(val => {
      if(this.videoIsPlaying){
        this.videoIsJittering = true;
        let freshback = timer(1500);
        freshback.subscribe(d => {
            this.videoIsJittering = false;
        });
      }
    });
  }

  jitterAudio(jitterVal: number) {
    if (this.audioTimerSubscription){
      this.audioTimerSubscription.unsubscribe();
    }
    switch (jitterVal) {
      case 0:
        // play every 6 secs, pause 1.5 secs
        this.muteTimer = timer(0, 6000);
        break;
      case 1:
        // play every 13.5 secs, pause 1.5 secs
        this.muteTimer = timer(0, 13500);
        break;
      case 2:
        // play every 28.5 secs, pause 1.5 secs, stopping 3 times essentially
        this.muteTimer = timer(0, 28500);
        break;
      case 3:
        this.muteTimer = timer(0, 1000000);
        break;
      }
    this.audioTimerSubscription = this.muteTimer.subscribe(val => {
      if(this.videoIsPlaying) {
        this.audioElement.volume = 0;
        let freshback = timer(1500);
        freshback.subscribe(d => {
          if(this.videoIsPlaying){
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
        this.audioElement.currentTime = this.videoElement.currentTime - 1.850;
        break;
       case 1:
        this.audioElement.currentTime = this.videoElement.currentTime - 1.615;
        break;
      case 2:
        this.audioElement.currentTime = this.videoElement.currentTime - 1.050;
        break;
      case 3:
        this.audioElement.currentTime = this.videoElement.currentTime;
        break;
    }
  }

  refreshPlayback() {
    this.videoIsPlaying = true;
    if(this.audioTimerSubscription){
      this.audioTimerSubscription.unsubscribe();
    }
    if(this.videoTimerSubscription){
      this.videoTimerSubscription.unsubscribe();
    }
    let time = Date.now();
    let that = this;
    this.videoSrc = this.videoFilePrefix+"demo-vq"+this.configurations['Video Quality']+".webm?t="+time;
    this.audioSrc = this.audioFilePrefix+"demo-aq"+this.configurations['Audio Quality']+".m4a?t="+time;
    let videoTempTime = this.videoElement.currentTime;
    let audioTempTime = this.audioElement.currentTime;
    this.videoElement.src = this.videoSrc;
    this.audioElement.src = this.audioSrc;
    this.videoElement.currentTime = videoTempTime;
    this.audioElement.currentTime = audioTempTime;
    this.syncAudioWithVideo();
    let ve = this.videoElement;
    let ae = this.audioElement;
    this.videoElement.addEventListener('loadeddata', function() {
      ve.play();
      ae.play();
      let ctx = that.canvasElement.getContext("2d");
      ctx.canvas.width  = window.innerWidth*0.5;
      ctx.canvas.height = window.innerHeight*0.4;
      that.videoContainer.scale = Math.min(
        ctx.canvas.width / this.videoWidth,
        ctx.canvas.height  / this.videoHeight);
      that.videoContainer.ready = true;
      requestAnimationFrame(that.updateCanvas.bind(that));
    }, false);
    this.jitterAudio(Number(this.configurations['Audio Stability']));
    this.jitterVideo(Number(this.configurations['Video Stability']));
  }

  updateCanvas(){
    this.canvasElement = this.canvas.nativeElement;
    var ctx = this.canvasElement.getContext("2d");
    if(!this.videoIsJittering){
      ctx.clearRect(0,0,this.canvasElement.width,this.canvasElement.height);
    }
    if(this.videoContainer !== undefined && this.videoContainer.ready){
        // find the top left of the video on the canvas
        var scale = this.videoContainer.scale;
        var vidH = this.videoContainer.video.videoHeight;
        var vidW = this.videoContainer.video.videoWidth;
        var top = ctx.canvas.height / 2 - (vidH /2 ) * scale;
        var left = ctx.canvas.width / 2 - (vidW /2 ) * scale;
        if(!this.videoIsJittering) {
          ctx.drawImage(this.videoContainer.video, left, top, vidW * scale, vidH * scale);
          if(this.videoContainer.video.paused){ // if not playing show the paused screen
              this.drawPayIcon();
          }
        }
    }
    requestAnimationFrame(this.updateCanvas.bind(this));
}

  onRadioCheck() {
    this.videoConfig = Object.values(this.configurations).map(a => Number(a));
    this.refreshPlayback();
  }

  playPause() {
    if(this.videoIsPlaying){
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
  }

  decidePath() {
    let pathIndex = Number(this.cookieService.get('user_current_path_index'));
    let pathArray: Array<object> = JSON.parse(this.cookieService.get('user_path'));
    let type: string = pathArray[pathIndex]['type'];
    if(type == 'normal'){
      this.route.navigate(['likert']);
    } else if(type == 'qv'){
      this.route.navigate(['qv']);
    } else if(type == 'video'){
      this.route.navigate(['video']).then(()=>location.reload());
    } else if(type == 'complete'){
      this.route.navigate(['complete']);
    }
  }

  ngOnDestroy()	{
    this.videoSrc = "";
    this.audioSrc = "";
    this.videoElement.src = this.videoSrc;
    this.audioElement.src = this.audioSrc;
    this.audioElement.pause();
    this.videoElement.pause();
    if(this.audioTimerSubscription){
      this.audioTimerSubscription.unsubscribe();
    }
    if(this.videoTimerSubscription){
      this.videoTimerSubscription.unsubscribe();
    }
    this.videoElement.remove();
    this.audioElement.remove();
    this.videoIsPlaying = false;
  }

  ngAfterViewInit()	 {
    this.configurations = {
      'Audio Quality': '0',
      'Video Quality': '0',
      'Audio Stability': '0',
      'Video Stability': '0',
      'Audio-Video Synchronization': '0',
    }
    console.log(this.configurations);
    this.videoElement = this.videoPlayer.nativeElement;
    this.audioElement = this.audioPlayer.nativeElement;
    this.videoOverlayElement = this.videoOverlay.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.videoContainer.video = this.videoElement;
    this.vService.requestForm();
    this.vService.videoForm.subscribe((data: Video) => {
      if(data){
        this.formJson = data;
        this.survey = {
          questions: data.settings.normal,
          showNav: false,
        }
        this.description = data.Description;
        this.title = data.Title;
        this.showCost = data.settings.control_panel_has_price;
        this.showConfig = data.settings.control_panel_can_change;
        let time: String = Date.now().toString();
        this.videoSrc = this.videoFilePrefix + 'demo-vq' + this.configurations['Video Quality'] + '.webm?t=' + time;
        this.audioSrc = this.audioFilePrefix + 'demo-aq' + this.configurations['Audio Quality'] + '.m4a?t=' + time;
        this.videoElement.src = this.videoSrc;
        this.audioElement.src = this.audioSrc;
        this.refreshPlayback();
      }
    })
  }

  submit(e: Event){

    if (this.completeFunc){
      this.completeFunc();
    } else {
      this.surveySubmit(null);
    }
  }

  surveySubmit(data) {
    this.videoElement.pause();
    this.vService.submit(this.videoConfig).subscribe(
      result => {
        this.decidePath();
      }
    );
  }

  // implementation based on https://stackoverflow.com/questions/38710125/how-do-i-display-a-video-using-html5-canvas-tag
  drawPayIcon(){
    this.canvasElement = this.canvas.nativeElement;
    let ctx = this.canvasElement.getContext("2d");
    let canvas = this.canvasElement;
    ctx.fillStyle = "black";  // darken display
    ctx.globalAlpha = 0.5;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#DDD"; // colour of play icon
    ctx.globalAlpha = 0.75; // partly transparent
    ctx.beginPath(); // create the path for the icon
    var size = (canvas.height / 2) * 0.5;  // the size of the icon
    ctx.moveTo(canvas.width/2 + size/2, canvas.height / 2); // start at the pointy end
    ctx.lineTo(canvas.width/2 - size/2, canvas.height / 2 + size);
    ctx.lineTo(canvas.width/2 - size/2, canvas.height / 2 - size);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1; // restore alpha
}
}
