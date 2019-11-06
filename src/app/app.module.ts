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
import { PopupGlobalDocModule } from './docs-pages/popup-global-doc/popup-global-doc.module';
import { PopupConnectedDocModule } from './docs-pages/popup-connected-doc/popup-connected-doc.module';
import { BroadcastHandlerDocModule } from './docs-pages/broadcast-handler-doc/broadcast-handler-doc.module';
import { DividerDocModule } from './docs-pages/divider-doc/divider-doc.module';
import { BoolPipeDocModule } from './docs-pages/bool-pipe-doc/bool-pipe-doc.module';

@NgModule({
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      ShellModule,
      WelcomeModule,
      SvgDocModule,
      PopupGlobalDocModule,
      PopupConnectedDocModule,
      BroadcastHandlerDocModule,
      DividerDocModule,
      BoolPipeDocModule,
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
