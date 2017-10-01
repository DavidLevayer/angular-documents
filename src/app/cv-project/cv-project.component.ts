import { CategorizedSkill } from './skills/categorized-skill';
import { PersonnalInformation } from '../core/personnal-information';
import { basics, projects, projectTasks, skillMatrix } from './cv-project.data';
import { Project } from './project/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-project',
  templateUrl: './cv-project.component.html',
  styleUrls: ['./cv-project.component.scss']
})
export class CvProjectComponent implements OnInit {

  basics: PersonnalInformation = basics;
  projects: Project[][] = projects;
  skills: CategorizedSkill[] = skillMatrix;
  tasks: string[] = projectTasks;

  constructor() { }

  ngOnInit() {
  }
}
