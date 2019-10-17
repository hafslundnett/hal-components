import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { RouterModule } from '@angular/router';
import { AppShellModule } from 'projects/hal-components/src/public-api';

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
