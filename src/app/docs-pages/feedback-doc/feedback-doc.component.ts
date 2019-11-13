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
    { apiInput: 'showMessage()', description: 'The main method for generating a feedback message, the arguments are described below:' },
    { apiInput: '"message"', description: 'The first argument is a string containg the message that appears in the feedback message' },
    // tslint:disable-next-line:max-line-length
    { apiInput: 'severity', description: 'The type or severity of the message. Must be set to either : success, primary, error or warn depending on what kind of message you want' },
    { apiInput: 'closable', description: 'Input for deciding if the message is closable by the user or not. Must be set to true or false' },
    { apiInput: 'duration', description: 'Input for setting the duration of the message before i closes. Must be defined in miliseconds.' },
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
      duration: 2000
    });
  }
  displayInfo() {
    this.feedbackService.showMessage('Very informational!',
    {
      severity: 'info',
      closable: true,
      duration: 2000
    });
  }
  displayError() {
    this.feedbackService.showMessage('Error Error Error!',
    {
      severity: 'error',
      closable: true,
      duration: 2000
    });
  }
  displayWarning() {
  this.feedbackService.showMessage('Warning!',
    {
      severity: 'warn',
      closable: true,
      duration: 2000
    });
  }
  `;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit() {
  }

  displaySuccess() {
    this.feedbackService.showMessage('Great Success!',
      {
        severity: 'success',
        closable: true,
        duration: 2000
      });
  }
  displayInfo() {
    this.feedbackService.showMessage('Very informational!',
      {
        severity: 'primary',
        closable: true,
        duration: 2000
      });
  }
  displayError() {
    this.feedbackService.showMessage('Error Error Error!',
      {
        severity: 'error',
        closable: true,
        duration: 2000
      });
  }
  displayWarning() {
    this.feedbackService.showMessage('Warning!',
      {
        severity: 'warn',
        closable: true,
        duration: 2000
      });
  }
}
