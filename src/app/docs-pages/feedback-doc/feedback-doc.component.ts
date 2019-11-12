import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';
import { FeedbackService } from '@hafslundnett/hal-components';

@Component({
  selector: 'hal-feedback-doc',
  templateUrl: './feedback-doc.component.html',
  styleUrls: ['./feedback-doc.component.scss']
})
export class FeedbackDocComponent implements OnInit {

  apiTableRows: ApiTableRow[] = [
    { apiInput: 'severity', description: 'Input for determening wether the popup is open or closed.' },
    { apiInput: 'closable', description: 'Input for setting origin for what element the popup should connect to.' },
    { apiInput: 'duration', description: 'Input for setting origin for what element the popup should connect to.' },
  ];

  directiveRows: ApiTableRow[] = [
    { apiInput: 'CdkOverlayOrigin', description: 'Directive applied to an element to make it usable as an origin for an Overlay.' }
  ];

  isTS = `
  displaySuccess() {
    this.feedbackService.showMessage('Great Success!', 
    {
      severity: 'success',
      closable: true,
      duration: 1000
    });
  }
  displayInfo() {
    this.feedbackService.showMessage('Very informational!', 
    {
      severity: 'info',
      closable: true,
      duration: 1000
    });
  }
  displayError() {
    this.feedbackService.showMessage('Error Error Error!', 
    {
      severity: 'error',
      closable: true,
      duration: 1000
    });
  }`;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
  }

  displaySuccess() {
    this.feedbackService.showMessage('Great Success!',
      {
        severity: 'success',
        closable: true,
        duration: 100000000
      });
  }
  displayInfo() {
    this.feedbackService.showMessage('Very informational!',
      {
        severity: 'info',
        closable: true,
        duration: 1000
      });
  }
  displayError() {
    this.feedbackService.showMessage('Error Error Error!',
      {
        severity: 'error',
        closable: true,
        duration: 1000
      });
  }
}
