import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HddStyleDocComponent } from './hdd-style-doc/hdd-style-doc.component';
import { ShellComponent } from './shell/shell.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'hdd',
        component: HddStyleDocComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
