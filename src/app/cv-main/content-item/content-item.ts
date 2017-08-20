export class ContentItem {
  date: string;
  title: string;
  location: string;
  description: string;

  constructor(date: string, title: string, location: string, description: string) {
    this.date = date;
    this.title = title;
    this.location = location;
    this.description = description;
  }
}
