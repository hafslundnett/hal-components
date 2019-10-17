import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { UserMenuModule } from './user-menu/user-menu.module';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    UserMenuModule
  ],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
