import { Component } from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitzer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      'home-icon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/HomeIcon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'event-icon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/EventIcon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'camera-icon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/CameraIcon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'contact-icon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/ContactIcon.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'menu-icon',
      this.domSanitzer.bypassSecurityTrustResourceUrl('assets/icons/MenuIcon.svg')
    );
  }

}
