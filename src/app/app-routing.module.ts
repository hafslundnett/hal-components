import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HddStyleDocComponent } from './hdd-style-doc/hdd-style-doc.component';
import { ShellComponent } from './shell/shell.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { Pages } from './shared/models/pages.enum';
import { SvgDocComponent } from './doc-pages/svg-doc/svg-doc.component';
import { PopupGlobalDocComponent } from './doc-pages/popup-global-doc/popup-global-doc.component';
import { PopupConnectedDocComponent } from './doc-pages/popup-connected-doc/popup-connected-doc.component';
import { BroadcastHandlerDocComponent } from './doc-pages/broadcast-handler-doc/broadcast-handler-doc.component';
import { CloseableRowDocComponent } from './doc-pages/closeable-row-doc/closeable-row-doc.component';
import { BoolToTextDocComponent } from './doc-pages/bool-to-text-doc/bool-to-text-doc.component';
import { ResizerDocComponent } from './doc-pages/resizer-doc/resizer-doc.component';
import { AppShellDocComponent } from './doc-pages/app-shell-doc/app-shell-doc.component';
import { StatusMarkDocComponent } from './doc-pages/status-mark-doc/status-mark-doc.component';
import { TableViewerDefaultDocComponent } from './doc-pages/table-viewer-default-doc/table-viewer-default-doc.component';
import { DateFormatDocComponent } from './doc-pages/date-format-doc/date-format-doc.component';
import { AnimationsDocComponent } from './doc-pages/animations-doc/animations-doc.component';
import { FeedbackDocComponent } from './doc-pages/feedback-doc/feedback-doc.component';
import { KeyboardShortcutsDocComponent } from './doc-pages/keyboard-shortcuts-doc/keyboard-shortcuts-doc.component';
import { LoadingSpinnerDocComponent } from './doc-pages/loading-spinner-doc/loading-spinner-doc.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { SchematicDocComponent } from './doc-pages/schematic-doc/schematic-doc.component';
import { SelectorDocComponent } from './doc-pages/selector-doc/selector-doc.component';
import { AutocompleteDocComponent } from './doc-pages/autocomplete-doc/autocomplete-doc.component';
import { PaginatorDocComponent } from './doc-pages/paginator-doc/paginator-doc.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: Pages.Welcome,
        pathMatch: 'full'
      },
      {
        path: Pages.Welcome,
        component: WelcomeComponent,
        pathMatch: 'full'
      },
      {
        path: Pages.GettingStarted,
        component: GettingStartedComponent,
      },
      {
        path: Pages.Hdd,
        component: HddStyleDocComponent
      },
      {
        path: Pages.SvgDoc,
        component: SvgDocComponent
      },
      {
        path: Pages.PopupGlobalDoc,
        component: PopupGlobalDocComponent
      },
      {
        path: Pages.PopupConnectedDoc,
        component: PopupConnectedDocComponent
      },
      {
        path: Pages.BroadcastHandlerDoc,
        component: BroadcastHandlerDocComponent
      },
      {
        path: Pages.Closeablerowdoc,
        component: CloseableRowDocComponent
      },
      {
        path: Pages.BoolToTextDoc,
        component: BoolToTextDocComponent
      },
      {
        path: Pages.ResizerDoc,
        component: ResizerDocComponent
      },
      {
        path: Pages.AppShellDoc,
        component: AppShellDocComponent
      },
      {
        path: Pages.StatusMarkDoc,
        component: StatusMarkDocComponent
      },
      {
        path: Pages.TableViewerDefaultDoc,
        component: TableViewerDefaultDocComponent
      },
      {
        path: Pages.DateFormatDoc,
        component: DateFormatDocComponent
      },
      {
        path: Pages.AnimationsDoc,
        component: AnimationsDocComponent
      },
      {
        path: Pages.FeedbackDoc,
        component: FeedbackDocComponent
      },
      {
        path: Pages.KeyboardShortcutsDoc,
        component: KeyboardShortcutsDocComponent
      },
      {
        path: Pages.LoadingSpinnerDoc,
        component: LoadingSpinnerDocComponent
      },
      {
        path: Pages.PaginatorDoc,
        component: PaginatorDocComponent
      },
      {
        path: Pages.Schematic,
        component: SchematicDocComponent
      },
      {
        path: Pages.SelectorDoc,
        component: SelectorDocComponent
      },
      {
        path: Pages.Autocomplete,
        component: AutocompleteDocComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
