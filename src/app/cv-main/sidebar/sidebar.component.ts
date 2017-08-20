import { Skill } from './skill';
import { basics, aboutMe, skills } from '../cv-main.data';
import { PersonnalInformation } from '../../core/personnal-information';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  basics: PersonnalInformation = basics;
  aboutMe: string = aboutMe;
  skills: Skill[] = skills;

  constructor() { }

  ngOnInit() {
  }

}
