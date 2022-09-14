import { Component, OnInit } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent{

  constructor(private meta: Meta,private title: Title){
    this.meta.addTags([
      {name: 'description', content: 'Gian Federspiel website'},
      {name: 'author', content: 'Gian Federspiel'},
      {name: 'keywords', content: 'Gian Federspiel'},
    ]);
    this.title.setTitle('Gian Federspiel')
  }

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
  onReload(){
    if(this.picNumber > 0 && this.picNumber < 5){
      this.picNumber++
      this.picUrl = "assets/profile" + String(this.picNumber) + ".png"
    }
    else{
      this.picNumber = 1
      this.picUrl = "assets/profile" + String(this.picNumber) + ".png"
    }
  }
  picNumber = 1
  picUrl = "assets/profile" + String(this.picNumber) + ".png"

}
