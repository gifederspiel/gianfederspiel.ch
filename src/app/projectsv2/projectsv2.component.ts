import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectsv2',
  templateUrl: './projectsv2.component.html',
  styleUrls: ['./projectsv2.component.css']
})
export class Projectsv2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toKapaplaner(){
    location.href = "https://github.com/PI-Kapazitatsplaner/Kapazitatsplaner"
  }
  toGFArchive(){
        location.href ="https://github.com/gifederspiel/gf_archive"
  }
  toGianFederspiel(){
    location.href ="https://github.com/gifederspiel/gianfederspiel.ch"
  }

}
