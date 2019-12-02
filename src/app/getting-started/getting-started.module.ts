import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GettingStartedComponent } from './getting-started.component';
import { DocListModule } from '../shared/doc-list/doc-list.module';
import { SpinnerModule } from '../shared/spinner/spinner.module';

@NgModule({
  imports: [
    CommonModule,
    DocListModule,
    SpinnerModule
  ],
  declarations: [GettingStartedComponent],
  exports: [GettingStartedComponent]
})
export class GettingStartedModule { }
