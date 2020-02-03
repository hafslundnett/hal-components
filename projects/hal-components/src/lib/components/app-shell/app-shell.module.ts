import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppShellComponent } from './app-shell.component';
import { RouterModule } from '@angular/router';
import { SidenavModule } from './sidenav/sidenav.module';
import { HeaderModule } from './header/header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SidenavModule,
    HeaderModule
  ],
  declarations: [AppShellComponent],
  exports: [AppShellComponent]
})
export class AppShellModule { }
