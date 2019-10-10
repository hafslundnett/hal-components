import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HalComponentsModule, TestButtonModule } from 'hal-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HddStyleDocComponent } from './hdd-style-doc/hdd-style-doc.component';

@NgModule({
   imports: [
      BrowserModule,
      AppRoutingModule,
      HalComponentsModule,
      TestButtonModule,
      BrowserAnimationsModule
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
