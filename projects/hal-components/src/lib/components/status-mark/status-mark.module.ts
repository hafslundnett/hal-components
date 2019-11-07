import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusMarkComponent } from './status-mark.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StatusMarkComponent],
  exports: [StatusMarkComponent]
})
export class StatusMarkModule { }
