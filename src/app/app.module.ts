import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule, IonicSwiper } from '@ionic/angular';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { LogoComponent } from './logo/logo.component';
import { SocialMediaLinksComponent } from './social-media-links/social-media-links.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

import { SwiperModule } from 'swiper/angular';
import { PinterestComponent } from './pinterest/pinterest.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilePictureComponent,
    LogoComponent,
    SocialMediaLinksComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    PinterestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    [SwiperModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
