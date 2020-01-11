import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videoIsPlaying=false
  constructor() { }
  playPause(e) {
    
    if(e.toElement.currentTime)
    if(this.videoIsPlaying){
      e.toElement.pause()
      this.videoIsPlaying = false;
    }else{
      e.toElement.play()
      this.videoIsPlaying = true;
    }
  }
  ngOnInit() {
    

  }

}
