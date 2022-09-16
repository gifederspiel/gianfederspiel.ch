import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser'
import Swiper, { SwiperOptions, Pagination, Scrollbar } from 'swiper';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})


export class AppComponent{

  public slidesPerView = 2
  public pagination = false

  constructor(private meta: Meta,private title: Title){
    this.meta.addTags([
      {name: 'description', content: 'Gian Federspiel website'},
      {name: 'author', content: 'Gian Federspiel'},
      {name: 'keywords', content: 'Gian Federspiel'},
    ]);
    this.title.setTitle('Gian Federspiel')
  }

  ngOnInit(){
    Swiper.use([Pagination])
    if(window.innerWidth > 700){
      this.slidesPerView = 2
      this.pagination = false
    }
    else{
      this.slidesPerView = 1
      this.pagination = true
    }
  }
}

