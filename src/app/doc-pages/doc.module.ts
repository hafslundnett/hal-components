import { NgModule } from '@angular/core';
import { SvgDocModule } from './svg-doc/svg-doc.module';
import { PopupGlobalDocModule } from './popup-global-doc/popup-global-doc.module';
import { PopupConnectedDocModule } from './popup-connected-doc/popup-connected-doc.module';
import { BroadcastHandlerDocModule } from './broadcast-handler-doc/broadcast-handler-doc.module';
import { DividerDocModule } from './divider-doc/divider-doc.module';
import { AppShellDocModule } from './app-shell-doc/app-shell-doc.module';
import { CloseablerowdocModule } from './closeable-row-doc/closeable-row-doc.module';
import { BoolToTextDocModule } from './bool-to-text-doc/bool-to-text-doc.module';
import { ResizerDocModule } from './resizer-doc/resizer-doc.module';
import { StatusMarkDocModule } from './status-mark-doc/status-mark-doc.module';
import { TableViewerDefaultDocModule } from './table-viewer-default-doc/table-viewer-default-doc.module';
import { DateFormatDocModule } from './date-format-doc/date-format-doc.module';
import { AnimationsDocModule } from './animations-doc/animations-doc.module';
import { FeedbackDocModule } from './feedback-doc/feedback-doc.module';
import { KeyboardShortcutsDocModule } from './keyboard-shortcuts-doc/keyboard-shortcuts-doc.module';
import { LoadingSpinnerDocModule } from './loading-spinner-doc/loading-spinner-doc.module';
import { SchematicDocModule } from './schematic-doc/schematic-doc.module';
import { SelectorDocModule } from './selector-doc/selector-doc.module';
import { AutocompleteDocModule } from './autocomplete-doc/autocomplete-doc.module';

@NgModule({
  imports: [
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
    SelectorDocModule,
    AutocompleteDocModule
  ],
})
export class DocModule { }
