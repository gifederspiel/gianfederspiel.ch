import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
