import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupConnectedComponent } from './popup-connected.component';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  declarations: [PopupConnectedComponent],
  exports: [PopupConnectedComponent]
})
export class PopupConnectedModule { }
