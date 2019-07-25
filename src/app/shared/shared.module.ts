import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubHeaderWithImageComponent } from './sub-header-with-image/sub-header-with-image.component';



@NgModule({
  declarations: [SubHeaderWithImageComponent],
  imports: [
    CommonModule
  ],
  exports: [SubHeaderWithImageComponent]
})
export class SharedModule { }
