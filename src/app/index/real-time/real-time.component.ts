import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ControlsAnimation } from '../constans';


@Component({
  selector: 'ngx-real-time',
  templateUrl: './real-time.component.html',
  styleUrls: ['./real-time.component.scss'],
  animations: [ControlsAnimation],
})
export class RealTimeComponent implements OnInit {

  @ViewChild('videoElement') videoElement: any;
  video: any;
  displayControls: boolean = true;
  isPlaying: boolean = false;

  private show_interval: any;
  private show_control:boolean = true;
  private showRouterClass: string;
  private showPlayClass: string
  private showFinished: boolean = false;

  constructor(private router: Router) { 
    this.toggleShowClass();
  }

  ngOnInit() {
    this.video = this.videoElement.nativeElement;
    this.video.src = "/assets/videos/welcome.mp4";
    this.video.poster = "/assets/images/welcome-bg.jpg";
    // this.video.loop = true;

    this.show_interval = setInterval(() => {
      this.show_control = false;
      this.toggleShowClass();
    }, 3000);
  }
  
  ngOnDestroy(): void {
    clearInterval(this.show_interval);
  }

  onEnded(): void {
    this.showFinished = true;
  }

  toggleShowClass(): void {
    this.showRouterClass = this.show_control ? 'up-show' : 'up-hidden';
    this.showPlayClass = this.show_control ? 'down-show' : 'down-hidden';

  }
  
  toIndex(event: any): void {
    // route index
    // this.router.navigateByUrl('index/monitoring');
    this.router.navigateByUrl('index/test');

  }

  mouseMove(event: any): void {
    this.show_control = true;
    this.toggleShowClass();
  }

  rePlay(): void {
    this.showFinished = false;
    this.video.pause();
    this.video.currentTime = '0';
    this.isPlaying = true;
    this.video.play();
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    if ( this.isPlaying ) {
      this.video.play();
    } else {
      this.video.pause();
    }
  }

}
