import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserMenuModule } from './user-menu/user-menu.module';
import { SvgElementModule } from '../../svg-element/svg-element.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    UserMenuModule,
    SvgElementModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
