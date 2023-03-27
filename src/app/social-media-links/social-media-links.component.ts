import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.css']
})
export class SocialMediaLinksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toInstagram(){
    console.log("Test")
    location.href = "https://www.instagram.com/gian.federspiel/"
  }
  toLinkedIn(){
    location.href = "https://www.linkedin.com/in/gian-federspiel-469841227/"
  }
  toGithub(){
    location.href = "https://github.com/gifederspiel"
  }
  toMail(){
    location.href="mailto:gian.federspiel@bluewin.ch?subject=Kontakt"
  }
}
