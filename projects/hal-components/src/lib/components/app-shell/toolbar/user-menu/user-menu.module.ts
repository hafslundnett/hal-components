import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMenuComponent } from './user-menu.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AppListComponent } from './app-list/app-list.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PopupConnectedModule } from '../../../popup-connected/popup-connected.module';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatIconModule,
    PopupConnectedModule,
    OverlayModule,
    A11yModule
  ],
  declarations: [UserMenuComponent, AppListComponent],
  exports: [UserMenuComponent]
})
export class UserMenuModule { }
