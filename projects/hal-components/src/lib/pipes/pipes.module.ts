import { NgModule } from '@angular/core';
import { BoolPipe } from './bool.pipe';

@NgModule({
  declarations: [BoolPipe],
  exports: [BoolPipe],
})
export class PipesModule { }