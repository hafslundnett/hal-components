import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { DocListModule } from '../shared/doc-list/doc-list.module';
import { SpinnerModule } from '../shared/spinner/spinner.module';
import { ExtendComponent } from './extend/extend.component';
import { ExtendDComponent } from './extendD/extendD.component';

@NgModule({
  imports: [
    CommonModule,
    DocListModule,
    SpinnerModule
  ],
  declarations: [WelcomeComponent, ExtendComponent, ExtendDComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
