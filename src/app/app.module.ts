import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AlertModule} from './_alert';
import {HomePageComponent} from './home-page/home-page.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {NgxPhotoGalleryComponent} from './ngx-photo-gallery/ngx-photo-gallery.component';
import {NgxImageGalleryModule} from 'ngx-image-gallery';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatMenuModule} from "@angular/material/menu";
import {NgxVideoGalleryComponent} from './ngx-video-gallery/ngx-video-gallery.component';
import {YouTubePlayerModule} from "@angular/youtube-player";
import {ContactFormComponent} from './contact-form/contact-form.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomePageComponent},
  {path: 'photoGallery', component: NgxPhotoGalleryComponent},
  {path: 'videoGallery', component: NgxVideoGalleryComponent},
  {path: 'contact', component: ContactFormComponent},
  {path: 'error', component: NotFoundComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    NotFoundComponent,
    NgxPhotoGalleryComponent,
    NgxVideoGalleryComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgxImageGalleryModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    YouTubePlayerModule,
    ReactiveFormsModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
