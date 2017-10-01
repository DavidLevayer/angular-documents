export class CategorizedSkill {

  category: string;
  skills: string;

  constructor(category?: string, skills?: string) {
    this.category = category;
    this.skills = skills;
  }
}
