import { ContentSection } from './content-section';
import { sections } from './../cv-main.data';
import { ContentItem } from './../content-item/content-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  sections: ContentSection[] = sections;

  constructor() { }

  ngOnInit() {
  }

}
