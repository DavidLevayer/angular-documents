export class Project {
  title: string;
  client: string;
  duration: string;
  position: string;
  description: string;
  keywords: string[];
  teamSize: number;
  github: string;

  constructor(title?: string, client?: string, duration?: string, position?: string, description?: string,
    keywords?: string[], teamSize?: number, github?: string) {
      this.title = title;
      this.client = client;
      this.duration = duration;
      this.position = position;
      this.description = description;
      this.keywords = keywords;
      this.teamSize = teamSize;
      this.github = github;
  }
}