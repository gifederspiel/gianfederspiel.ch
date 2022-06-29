import { Component, OnInit } from '@angular/core'
import { get } from 'scriptjs'

@Component({
  selector: 'app-instagram-embed',
  templateUrl: './instagram-embed.component.html',
  styleUrls: ['./instagram-embed.component.css']
})
export class InstagramEmbedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    get("https://instagram.com/embed.js", () => {
    });
  }

}
