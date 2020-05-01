import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'ngx-video-gallery',
  templateUrl: './ngx-video-gallery.component.html',
  styleUrls: ['./ngx-video-gallery.component.scss']
})
export class NgxVideoGalleryComponent implements OnInit {

  videos: {} = [
    {
      id: 'ntmxTUDJpVQ',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: 'HJsBP8hE4-0',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: 'rYFgcjjW5Qs',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: 'IL9MZUXRFx0',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: 'AS9FNWsjsPY',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: '-OfjsdVEIWM',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: 'eZkFwdLbT54',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: '3wDW-uP1QdE',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: '0_WvtLYojyk',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: 'ntmxTUDJpVQ',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: 'HJsBP8hE4-0',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: 'rYFgcjjW5Qs',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: 'IL9MZUXRFx0',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: 'AS9FNWsjsPY',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: '-OfjsdVEIWM',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: 'eZkFwdLbT54',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: '3wDW-uP1QdE',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: '0_WvtLYojyk',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: '-OfjsdVEIWM',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: 'eZkFwdLbT54',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: '3wDW-uP1QdE',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    },
    {
      id: '0_WvtLYojyk',
      suggestedQuality: 'highres',
      height: '211',
      width: '375'
    }
  ]

  constructor(private titleService: Title) {
    this.titleService.setTitle("Taraful Turnenii - Galerie Video")
  }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
