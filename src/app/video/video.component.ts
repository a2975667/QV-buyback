import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { VideoService } from '../services/video.service';
import { timer, Observable, Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @ViewChild('videoPlayer', {static: false}) videoPlayer: ElementRef;
  @ViewChild('videoOverlay', {static: false}) videoOverlay: ElementRef;
  @ViewChild('audioPlayer', {static: false}) audioPlayer: ElementRef;

  videoOverlayElement: HTMLDivElement;
  videoElement: HTMLVideoElement;
  audioElement: HTMLAudioElement;

  videoFilePrefix = environment.apiUrl+"/api/video/";
  videoSrc = "";

  audioFilePrefix = environment.apiUrl+"/api/audio/";
  audioSrc = "";

  configurations = {
    "Audio Quality": '0',
    "Video Quality": '0',
    "Audio Loss": '0',
    "Video Loss": '0',
    "Audio-Video Synchronization": '0',
  }

  videoIsPlaying=false;

  objectKeys = Object.keys;

  videoConfig = new Array(5).fill(0);;

  sumUpCost = (arr) => {return arr.reduce((a, b) => a + b)}
  formJson: Object;

  blackTimer: Observable<number>;
  videoTimerSubscription: Subscription;

  muteTimer: Observable<number>;
  audioTimerSubscription: Subscription;

  description: String;
  title: String;

  constructor(
    private vService: VideoService,
    private cookieService: CookieService,
    private route: Router,
    ) { }

  jitterVideo(jitterVal: number) {
    this.blackTimer = timer(0, (jitterVal+1) * 1000);
    this.videoTimerSubscription= this.blackTimer.subscribe(val => {
      if(this.videoIsPlaying)
        this.videoOverlayElement.className = "content"
      let freshback = timer(100);
      freshback.subscribe(d => {
        if(this.videoIsPlaying)
          this.videoOverlayElement.className = "original"
        })
    });
  }

  jitterAudio(jitterVal: number) {
    this.muteTimer = timer(0, (jitterVal+1) * 2000);
    this.audioTimerSubscription= this.muteTimer.subscribe(val => {
      if(this.videoIsPlaying)
        this.audioElement.volume = 0;
      let freshback = timer(1500);
      freshback.subscribe(d => {
        if(this.videoIsPlaying)
          this.audioElement.volume = 1;
        })
    });
  }

  syncAudioWithVideo() {
    this.audioElement.currentTime =
      this.videoElement.currentTime - 0.1*(5-Number(this.configurations['Audio-Video Synchronization']));
  }

  refreshPlayback() {
    this.videoIsPlaying = true
    if(this.audioTimerSubscription){
      this.audioTimerSubscription.unsubscribe();
    }
    if(this.videoTimerSubscription){
      this.videoTimerSubscription.unsubscribe();
    }
    let time = Date.now();
    this.videoSrc = this.videoFilePrefix+"vq"+this.configurations['Video Quality']+".webm?t="+time;
    this.audioSrc = this.audioFilePrefix+"aq"+this.configurations['Audio Quality']+".m4a?t="+time;
    let videoTempTime = this.videoElement.currentTime;
    let audioTempTime = this.audioElement.currentTime;
    this.videoElement.src = this.videoSrc;
    this.audioElement.src = this.audioSrc;
    this.videoElement.currentTime = videoTempTime;
    this.audioElement.currentTime = audioTempTime;
    this.syncAudioWithVideo();
    let ve = this.videoElement;
    this.videoElement.addEventListener('loadeddata', function() {
      ve.play();
    }, false);    
    let ae = this.audioElement;
    this.videoElement.addEventListener('loadeddata', function() {
      ae.play();
    }, false);
    this.jitterAudio(Number(this.configurations['Audio Loss']));
    this.jitterVideo(Number(this.configurations['Video Loss']));
  }

  onRadioCheck() {
    this.videoConfig = Object.values(this.configurations).map(a => Number(a));
    this.refreshPlayback();
  }
  
  playPause(e) {
    if(this.videoIsPlaying){
      this.audioElement.pause()
      this.videoElement.pause()
      this.videoIsPlaying = false
    }else{
      this.refreshPlayback();
      this.videoIsPlaying = true
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
      this.route.navigate(['video']);
    } else if(type == 'complete'){
      this.route.navigate(['complete']);
    }
  }

  ngAfterViewInit()	 {
    this.videoElement = this.videoPlayer.nativeElement;
    this.audioElement = this.audioPlayer.nativeElement;
    this.videoOverlayElement = this.videoOverlay.nativeElement;
    this.vService.requestForm();
    this.vService.videoForm.subscribe(data => {
      this.formJson = data;
      this.description = data['Description'];
      this.title = data['Title'];
      let time: String = Date.now().toString();
      this.videoSrc = this.videoFilePrefix+"vq"+this.configurations['Video Quality']+".webm?t="+time;
      this.audioSrc = this.audioFilePrefix+"aq"+this.configurations['Audio Quality']+".m4a?t="+time;
      this.videoElement.src = this.videoSrc;
      this.audioElement.src = this.audioSrc;
      // this.refreshPlayback();
    })
  }

  submit(){
    this.vService.submit(this.videoConfig).subscribe(
      result => {
        this.decidePath();
      }
    );
  }

}
