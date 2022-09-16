import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

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
