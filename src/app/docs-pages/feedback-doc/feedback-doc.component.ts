import { Component, OnInit } from '@angular/core';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';
import { FeedbackService } from '@hafslundnett/hal-components';

@Component({
  selector: 'hal-feedback-doc',
  templateUrl: './feedback-doc.component.html',
  styleUrls: ['./feedback-doc.component.scss']
})
export class FeedbackDocComponent implements OnInit {

  MethodTable: ApiTableRow[] = [
    { apiInput: 'showMessage()', description: 'The main method for generating a feedback message, the parameters are described below:' },
  ];

  Parameterstable: ApiTableRow[] = [
    // tslint:disable-next-line:max-line-length
    { apiInput: 'message: string', description: 'The first parameter is a string containg the message that appears in the feedback message' },
    // tslint:disable-next-line:max-line-length
    { apiInput: 'severity: string', description: 'The type or severity of the message. Must be set to either : success, primary, error or warn depending on what kind of message you want' },
    { apiInput: 'closable: boolean', description: 'Deciding if the message is closable by the user or not. Must be set to true or false' },
    // tslint:disable-next-line:max-line-length
    { apiInput: 'duration: number', description: 'Setting for the duration of the message before it closes. Must be defined in miliseconds.' },
  ];

  isTS = `displaySuccess() {
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
}`;

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

  ComponentDemo() {
    // TODO Use it like the normal ones just with a component.
  }
}
