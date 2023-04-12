import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.component.html',
  styleUrls: ['./pinterest.component.css']
})
export class PinterestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    let pinterestScript = document.createElement('script');
    pinterestScript.setAttribute('async', '');
    pinterestScript.setAttribute('defer', '');
    pinterestScript.setAttribute('src', '//assets.pinterest.com/js/pinit.js');
    document.body.appendChild(pinterestScript);
  }
  

}
