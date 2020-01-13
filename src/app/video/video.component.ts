import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  
  configurations = {
    "Audio Quality": 0,
    "Video Quality": 0,
    "Audio Loss": 0,
    "Video Loss": 0,
    "Audio-Video Synchronization": 0,
  }
  
  videoIsPlaying=false;
  
  objectKeys = Object.keys;
  
  video_config = [...Array(5).keys()];
  
  constructor() { }
  
  calIdOfVideo() {
    let id = 0;
    this.objectKeys(this.configurations).forEach((item, index) => {
      id = id + Number(this.configurations[item])*Math.pow(this.video_config.length, index)
    })
    return id;
  }
  onRadioCheck() {
    let idOfVideo = this.calIdOfVideo();
  }
  playPause(e) {
    if(this.videoIsPlaying){
      e.toElement.pause()
      this.videoIsPlaying = false
    }else{
      e.toElement.play()
      this.videoIsPlaying = true
    }
  }

  mouseVideoEvent(e ,code: String) {
    let darken_style = "-webkit-filter: grayscale(100%); -moz-filter: grayscale(100%); -o-filter: grayscale(100%); -ms-filter: grayscale(100%); filter: grayscale(100%);"
    if ( code == 'enter') {
      e.toElement.style = darken_style
    } else {
      e.toElement.style = "all: unset "
    }
  }

  ngOnInit() {
    this.objectKeys(this.configurations).forEach

  }

}
