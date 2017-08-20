import { CommonModule } from '@angular/common';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NgModule } from '@angular/core';

import { CvMainComponent } from './cv-main.component';
import { ContentItemComponent } from './content-item/content-item.component';

@NgModule({
    imports: [CommonModule],
    exports: [CvMainComponent],
    declarations: [CvMainComponent, SidebarComponent, ContentComponent, ContentItemComponent],
    providers: [],
})
export class CvMainModule { }
