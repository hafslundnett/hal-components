import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsExampleComponent } from './animations-example.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AnimationsExampleComponent],
  exports: [AnimationsExampleComponent]
})
export class AnimationsExampleModule { }
