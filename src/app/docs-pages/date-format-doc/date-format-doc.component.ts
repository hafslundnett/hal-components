import { Component, OnInit } from '@angular/core';
import { DateConstants } from '@hafslundnett/hal-components';
import { formatDate, registerLocaleData } from '@angular/common';
import localeNorwegian from '@angular/common/locales/nb';
import { ApiTableRow } from 'src/app/shared/models/api-table-row.interface';

@Component({
  selector: 'hal-date-format-doc',
  templateUrl: './date-format-doc.component.html',
  styleUrls: ['./date-format-doc.component.scss']
})
export class DateFormatDocComponent implements OnInit {

  dateFormat: ApiTableRow[] = [
    { apiInput: 'dateFormat', description: '{{ example1 }}' },
  ];

  today = new Date();
  example1 = '';
  example2 = '';
  example3 = '';
  example4 = '';
  example5 = '';
  example6 = '';
  example7 = '';
  example8 = '';
  example9 = '';
  example10 = '';
  example11 = '';

  ngOnInit() {
    registerLocaleData(localeNorwegian);
    this.example1 = formatDate(this.today, DateConstants.dateFormat, 'nb-NO');
    this.example2 = formatDate(this.today, DateConstants.dateDotFormat, 'nb-NO');
    this.example3 = formatDate(this.today, DateConstants.dateShortFormat, 'nb-NO');
    this.example4 = formatDate(this.today, DateConstants.csvDateFormat, 'nb-NO');
    this.example5 = formatDate(this.today, DateConstants.ddmmyyhhmm, 'nb-NO');
    this.example6 = formatDate(this.today, DateConstants.dotddmmyyhhmm, 'nb-NO');
    this.example7 = formatDate(this.today, DateConstants.dashddmmyy, 'nb-NO');
    this.example8 = formatDate(this.today, DateConstants.dotddmmyy, 'nb-NO');
    this.example9 = formatDate(this.today, DateConstants.hhmm, 'nb-NO');
    this.example10 = formatDate(this.today, DateConstants.ddmm, 'nb-NO');
    this.example11 = formatDate(this.today, DateConstants.ddDashMM, 'nb-NO');
  }
}
