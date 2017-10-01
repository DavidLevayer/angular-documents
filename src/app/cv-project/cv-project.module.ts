import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CvProjectComponent } from './cv-project.component';
import { NgModule } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CvProjectComponent],
  declarations: [CvProjectComponent, ProjectComponent, SkillsComponent],
  providers: [],
})
export class CvProjectModule { }
