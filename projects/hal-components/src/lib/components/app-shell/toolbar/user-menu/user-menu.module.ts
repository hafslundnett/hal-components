import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user-menu.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: [UserMenuComponent],
  exports: [UserMenuComponent]
})
export class UserMenuModule { }
