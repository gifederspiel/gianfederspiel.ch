import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gianfederspiel.ch';

  toInstagram(){
    console.log("Test")
    location.href = "https://www.instagram.com/gian.federspiel/"
  }
  toGithub(){
    location.href = "https://github.com/gifederspiel"
  }
  toLinkedIn(){
    location.href = "https://www.linkedin.com/in/gian-federspiel-469841227/"
  }
}
