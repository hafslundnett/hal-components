import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HddStyleDocComponent } from './hdd-style-doc/hdd-style-doc.component';
import { HttpClientModule } from '@angular/common/http';
import { ShellModule } from './shell/shell.module';
import { WelcomeModule } from './welcome/welcome.module';
import { SvgDocModule } from './docs-pages/svg-doc/svg-doc.module';

@NgModule({
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ShellModule,
      WelcomeModule,
      SvgDocModule
   ],
   declarations: [
      AppComponent,
      HddStyleDocComponent,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
