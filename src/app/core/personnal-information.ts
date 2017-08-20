export class PersonnalInformation {
  name: string;
  position: string;
  location: string;
  email: string;
  phone: string;
  github: GithubInformation;

  constructor(name: string, position: string, location: string, email: string, phone: string, github: GithubInformation) {
    this.name = name;
    this.position = position;
    this.location = location;
    this.email = email;
    this.phone = phone;
    this.github = github;
  }
}

export class GithubInformation {
  username: string;
  url: string;

  constructor(username: string, url: string) {
    this.username = username;
    this.url = url;
  }
}