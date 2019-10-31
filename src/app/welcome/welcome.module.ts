import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { DocListModule } from '../shared/doc-list/doc-list.module';


@NgModule({
  imports: [
    CommonModule,
    DocListModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
