import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgElementComponent } from './svg-element.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SvgElementComponent],
  exports: [SvgElementComponent],
})
export class SvgElementModule { }
