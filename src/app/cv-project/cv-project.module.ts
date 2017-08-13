import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CvProjectComponent } from './cv-project.component';
import { NgModule } from '@angular/core';
import { ProjectComponent } from './project/project.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CvProjectComponent],
  declarations: [CvProjectComponent, ProjectComponent],
  providers: [],
})
export class CvProjectModule { }
