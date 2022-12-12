import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  age = calcAge();

}
function calcAge() {
  console.log(new Date('2004-06-08'));
  
  var timeDiff = Math.abs(Date.now() - +new Date('2004-06-08'));
  var age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  return age;
}
