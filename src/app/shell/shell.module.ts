import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { RouterModule } from '@angular/router';
// import { AppShellModule } from 'dist/hal-components/public-api';
import { AppShellModule } from 'hal-components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppShellModule
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent]
})
export class ShellModule { }
