import { Component, OnInit, Input } from '@angular/core';
import { ContentItem } from './content-item';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.component.html',
  styleUrls: ['./content-item.component.scss']
})
export class ContentItemComponent implements OnInit {

  @Input() contentItem: ContentItem;

  constructor() { }

  ngOnInit() {
  }

}
