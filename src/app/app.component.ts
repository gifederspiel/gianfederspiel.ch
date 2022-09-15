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
  toMail(){
    location.href="mailto:gian.federspiel@bluewin.ch?subject=Kontakt"
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

}
