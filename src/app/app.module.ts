import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

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
import { CloseablerowdocModule } from './docs-pages/closeable-row-doc/closeable-row-doc.module';
import { BoolToTextDocModule } from './docs-pages/bool-to-text-doc/bool-to-text-doc.module';
import { ResizerDocModule } from './docs-pages/resizer-doc/resizer-doc.module';
import { AppShellDocModule } from './docs-pages/app-shell-doc/app-shell-doc.module';
import { StatusMarkDocModule } from './docs-pages/status-mark-doc/status-mark-doc.module';
import { TableViewerDefaultDocModule } from './docs-pages/table-viewer-default-doc/table-viewer-default-doc.module';
import { DateFormatDocModule } from './docs-pages/date-format-doc/date-format-doc.module';
import { FeedbackDocModule } from './docs-pages/feedback-doc/feedback-doc.module';
import { AnimationsDocModule } from './docs-pages/animations-doc/animations-doc.module';
import { registerLocaleData } from '@angular/common';
import { LoadingSpinnerDocModule } from './docs-pages/loading-spinner-doc/loading-spinner-doc.module';
import localeNb from '@angular/common/locales/nb';
registerLocaleData(localeNb);
import { KeyboardShortcutsDocModule } from './docs-pages/keyboard-shortcuts-doc/keyboard-shortcuts-doc.module';
import { SchematicDocModule } from './docs-pages/schematic-doc/schematic-doc.module';
import { SelectorDocModule } from './docs-pages/selector-doc/selector-doc.module';

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
      AppShellDocModule,
      CloseablerowdocModule,
      BoolToTextDocModule,
      ResizerDocModule,
      StatusMarkDocModule,
      TableViewerDefaultDocModule,
      DateFormatDocModule,
      AnimationsDocModule,
      FeedbackDocModule,
      KeyboardShortcutsDocModule,
      LoadingSpinnerDocModule,
      SchematicDocModule,
      SelectorDocModule
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
