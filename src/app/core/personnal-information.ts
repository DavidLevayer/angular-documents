export class PersonnalInformation {
  name: string;
  position: string;
  location: string;
  email: string;
  phone: string;
  linkedIn: UserInformation;
  github: UserInformation;

  constructor(name: string, position: string, location: string, email: string, phone: string, linkedIn: UserInformation,
    github: UserInformation) {
    this.name = name;
    this.position = position;
    this.location = location;
    this.email = email;
    this.phone = phone;
    this.linkedIn = linkedIn;
    this.github = github;
  }
}

export class UserInformation {
  username: string;
  url: string;

  constructor(username: string, url: string) {
    this.username = username;
    this.url = url;
  }
}
