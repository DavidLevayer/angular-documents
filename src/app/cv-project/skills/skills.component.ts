import { CategorizedSkill } from './categorized-skill';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  @Input()
  skills: CategorizedSkill[];

  @Input()
  tasks: string[];

  constructor() { }
}
