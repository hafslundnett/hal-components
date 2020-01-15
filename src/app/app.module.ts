import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HddStyleDocComponent } from './hdd-style-doc/hdd-style-doc.component';
import { HttpClientModule } from '@angular/common/http';
import { ShellModule } from './shell/shell.module';
import { WelcomeModule } from './welcome/welcome.module';
import { registerLocaleData } from '@angular/common';
import localeNb from '@angular/common/locales/nb';
import { GettingStartedModule } from './getting-started/getting-started.module';
import { FormsModule } from '@angular/forms';
import { DocModule } from './doc-pages/doc.module';

registerLocaleData(localeNb);

@NgModule({
   imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ShellModule,
      WelcomeModule,
      GettingStartedModule,
      DocModule
   ],
   declarations: [
      AppComponent,
      HddStyleDocComponent,
   ],
   providers: [
      { provide: LOCALE_ID, useValue: 'nb' },
   ],
   bootstrap: [
      AppComponent,
   ],
})
export class AppModule { }
