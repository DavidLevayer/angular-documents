import { ContentItem } from '../content-item/content-item';
export class ContentSection {
  name: string;
  contentItems: ContentItem[];

  constructor(name: string, contentItems: ContentItem[]) {
    this.name = name;
    this.contentItems = contentItems;
  }
}
