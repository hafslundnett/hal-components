import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { DocCardModule } from '../shared/doc-card/doc-card.module';


@NgModule({
  imports: [
    CommonModule,
    DocCardModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
