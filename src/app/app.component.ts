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
}
