import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResizerDocComponent } from './resizer-doc.component';
import { ResizerModule } from 'hal-components';

@NgModule({
  imports: [
    CommonModule,
    ResizerModule
  ],
  declarations: [ResizerDocComponent],
  exports: [ResizerDocComponent]
})
export class ResizerDocModule { }
