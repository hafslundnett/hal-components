import { NgModule } from '@angular/core';
import { BoolToTextPipe } from './bool-to-text.pipe';

@NgModule({
  declarations: [BoolToTextPipe],
  exports: [BoolToTextPipe],
})
export class BoolToTextModule { }
