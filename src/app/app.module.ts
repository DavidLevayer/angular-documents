import { CoreModule } from './core/core.module';
import { CvProjectModule } from './cv-project/cv-project.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CvProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
