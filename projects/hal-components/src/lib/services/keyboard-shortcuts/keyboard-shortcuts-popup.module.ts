import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardShortcutsPopupComponent } from './keyboard-shortcuts-popup.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PopupGlobalService } from '../popup-global/popup-global.service';
@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
  ],
  declarations: [KeyboardShortcutsPopupComponent],
  entryComponents: [KeyboardShortcutsPopupComponent],
  exports: [KeyboardShortcutsPopupComponent],
  providers: [PopupGlobalService]
})
export class KeyboardShortcutsPopupModule { }
