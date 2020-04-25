import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Taraful Turnenii - Formatie Evenimente")
  }

  ngOnInit(): void {
    this.hideSlider();
  }

  public imageSrc: String = 'assets/MuteIcon.png';
  public matBarValue: Number = 0;
  private isIOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

  playPause(video, btn) {
    if (video.paused) {
      video.play();
      btn.innerHTML = "Pause Video";
    } else {
      video.pause();
      btn.innerHTML = "Play Video";
    }
  }

  hideSlider(): void {
    if (this.isIOS) {
      document.getElementById("volumeSlider").hidden = true;
    }
  }

  changeImagePathAndMuteUnmuteVideo(video: HTMLVideoElement, btn) {
    if (video.muted) {
      video.muted = false;
      btn.innerHTML = 'Mute Video';
      this.imageSrc = 'assets/VolIcon.png';
      this.matBarValue = video.volume;
    } else {
      video.muted = true;
      btn.innerHTML = 'Unmute Video';
      this.imageSrc = 'assets/MuteIcon.png';
      this.matBarValue = 0;
    }
  }

  changeBtnIcoWithSlider(videoElement, muteBtn: HTMLButtonElement) {
    if (videoElement.volume > 0) {
      videoElement.muted = false;
      this.matBarValue = videoElement.volume;
      muteBtn.innerHTML = 'Mute Video'
      this.imageSrc = 'assets/VolIcon.png';
    } else {
      muteBtn.innerHTML = 'Unmute Video';
      this.imageSrc = 'assets/MuteIcon.png';
      videoElement.muted = true;
    }
  }
}
