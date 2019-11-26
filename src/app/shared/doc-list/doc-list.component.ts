import { Component, OnInit } from '@angular/core';
import { Pages } from '../models/pages.enum';
import { DocListItem } from '../models/doc-list-item.interface';

@Component({
  selector: 'hal-doc-list',
  templateUrl: './doc-list.component.html',
  styleUrls: ['./doc-list.component.scss']
})
export class DocListComponent implements OnInit {

  public readonly pages = Pages;

  components: DocListItem[] = [
    {
      cardTitle: 'Svg Component',
      cardSubtitle: 'For displaying SVG files',
      cardIcon: 'fa-images',
      docUrl: Pages.SvgDoc
    },
    {
      cardTitle: 'Popup Connected Component',
      cardSubtitle: 'For displaying a connected popup',
      cardIcon: 'fa-comment-alt',
      docUrl: Pages.PopupConnectedDoc
    },
    {
      cardTitle: 'Divider Component',
      cardSubtitle: 'Component to divide UI elements',
      cardIcon: 'fa-columns',
      docUrl: Pages.DividerDoc
    },
    {
      cardTitle: 'Closeable Row',
      cardSubtitle: 'An expandable row',
      cardIcon: 'fa-expand',
      docUrl: Pages.Closeablerowdoc
    },
    {
      cardTitle: 'Resizer',
      cardSubtitle: 'For displaying a standard popup',
      cardIcon: 'fa-expand-arrows-alt',
      docUrl: Pages.ResizerDoc
    },
    {
      cardTitle: 'App Shell',
      cardSubtitle: 'App shell for projects',
      cardIcon: 'fa-desktop',
      docUrl: Pages.AppShellDoc
    },
    {
      cardTitle: 'Status Mark',
      cardSubtitle: 'The status mark for the state of something',
      cardIcon: 'fa-check',
      docUrl: Pages.StatusMarkDoc
    },
    {
      cardTitle: 'Table Viewer default',
      cardSubtitle: 'For displaying dynamic data in a table',
      cardIcon: 'fa-table',
      docUrl: Pages.TableViewerDefaultDoc
    },
    {
      cardTitle: 'Loading Spinner',
      cardSubtitle: 'For displaying loading spinner',
      cardIcon: 'fa-spinner',
      docUrl: Pages.LoadingSpinnerDoc
    },
  ];

  services: DocListItem[] = [
    {
      cardTitle: 'Popup Global Service',
      cardSubtitle: 'For displaying a standard popup',
      cardIcon: 'fa-comment-alt',
      docUrl: Pages.PopupGlobalDoc
    },
    {
      cardTitle: 'Broadcast Handler',
      cardSubtitle: 'For sending messages between browser tabs',
      cardIcon: 'fa-bullhorn',
      docUrl: Pages.BroadcastHandlerDoc
    },
    {
      cardTitle: 'Feedback Service',
      cardSubtitle: 'For displaying a feedback message',
      cardIcon: 'fa-comment-alt',
      docUrl: Pages.FeedbackDoc
    },
    {
      cardTitle: 'Keyboard Shortcuts',
      cardSubtitle: 'For displaying dynamic data in a table',
      cardIcon: 'fa-keyboard',
      docUrl: Pages.KeyboardShortcutsDoc
    },
  ];

  pipes: DocListItem[] = [
    {
      cardTitle: 'Bool To Text Pipe',
      cardSubtitle: 'Bool To Text Pipe transformes a boolean to text',
      cardIcon: 'fa-adjust',
      docUrl: Pages.BoolToTextDoc
    },
  ];

  directives: DocListItem[] = [
  ];

  constants: DocListItem[] = [
    {
      cardTitle: 'Date Formats',
      cardSubtitle: 'Date Format Constants',
      cardIcon: 'fa-clock',
      docUrl: Pages.DateFormatDoc
    },
    {
      cardTitle: 'Animations',
      cardSubtitle: 'Implement animations on components',
      cardIcon: 'fa-random',
      docUrl: Pages.AnimationsDoc
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
