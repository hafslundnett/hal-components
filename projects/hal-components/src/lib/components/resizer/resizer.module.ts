import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizerComponent } from './resizer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ResizerComponent],
  exports: [ResizerComponent]
})
export class ResizerModule { }
