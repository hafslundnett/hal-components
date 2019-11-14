import { Component, OnInit } from '@angular/core';
import { DateConstants } from '@hafslundnett/hal-components';
import { formatDate } from '@angular/common';

@Component({
  selector: 'hal-date-format-doc',
  templateUrl: './date-format-doc.component.html',
  styleUrls: ['./date-format-doc.component.scss']
})
export class DateFormatDocComponent implements OnInit {

  today = new Date();
  showDate = formatDate(this.today, DateConstants.dateFormat, 'en-US');

  dateConstantTable = [
    { constant: 'dateFormat', format: 'yyyy-MM-dd', result: formatDate(this.today, DateConstants.dateFormat, 'en-US')},
    { constant: 'dateDotFormat', format: 'yyyy.MM.dd', result: formatDate(this.today, DateConstants.dateDotFormat, 'en-US')},
    { constant: 'dateShortFormat', format: 'yyyyMMdd', result: formatDate(this.today, DateConstants.dateShortFormat, 'en-US')},
    { constant: 'csvDateFormat', format: 'yyyy-MM-dd', result: formatDate(this.today, DateConstants.csvDateFormat, 'en-US')},
    { constant: 'ddmmyyhhmm', format: 'dd-MM-yyyy, HH:mm', result: formatDate(this.today, DateConstants.ddmmyyhhmm, 'en-US')},
    { constant: 'dotddmmyyhhmm', format: 'dd.MM.yyyy HH:mm', result: formatDate(this.today, DateConstants.dotddmmyyhhmm, 'en-US')},
    { constant: 'dashddmmyy', format: 'dd-MM-yyyy', result: formatDate(this.today, DateConstants.dashddmmyy, 'en-US')},
    { constant: 'dotddmmyy', format: 'dd.MM.yyyy', result: formatDate(this.today, DateConstants.dotddmmyy, 'en-US')},
    { constant: 'hhmm', format: 'HH:mm', result: formatDate(this.today, DateConstants.hhmm, 'en-US')},
    { constant: 'ddmm', format: 'dd.MM', result: formatDate(this.today, DateConstants.ddmm, 'en-US')},
    { constant: 'ddDashMM', format: 'dd/MM', result: formatDate(this.today, DateConstants.ddDashMM, 'en-US')}
  ];
  tsCode = `today = new Date();
DisplayDateFormat = formatDate(this.today, DateConstants.dateFormat, 'en-US');
DisplayCsvDateFormat = formatDate(this.today, DateConstants.csvDateFormat, 'en-US');
Displayhhmm = formatDate(this.today, DateConstants.hhmm, 'en-US');

  `;

  htmlCode = `{{ today | date: DisplayDateFormat }}
{{ today | date: DisplayCsvDateFormat }}
{{ today | date: Displayhhmm }}`;

  ngOnInit() {
  }
}
