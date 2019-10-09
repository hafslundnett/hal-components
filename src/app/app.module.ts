import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HalComponentsModule, TestButtonModule } from 'hal-components';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HalComponentsModule,
    TestButtonModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
