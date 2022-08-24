import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  toInstagram(){
    console.log("Test")
    location.href = "https://www.instagram.com/gian.federspiel/"
  }
  toMail(){
    location.href="mailto:gian.federspiel@bluewin.ch?subject=Kontakt"
  }
  toLinkedIn(){
    location.href = "https://www.linkedin.com/in/gian-federspiel-469841227/"
  }
  toGithub(){
    location.href = "https://github.com/gifederspiel"
  }
  toKapaplaner(){
    location.href = "https://github.com/PI-Kapazitatsplaner/Kapazitatsplaner"
  }
  toGamelauncher(){
        location.href ="https://github.com/gifederspiel/Fancy-BLJ-Gamelauncher/tree/master"
  }
  toGianFederspiel(){
    location.href ="https://github.com/gifederspiel/gianfederspiel.ch"
  }
  picUrl = "assets/profile" + String(Math.floor(Math.random() * 5) + 1) + ".png"

}
