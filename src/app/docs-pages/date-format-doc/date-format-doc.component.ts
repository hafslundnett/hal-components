import { Component, OnInit } from '@angular/core';
import { DateConstants } from '@hafslundnett/hal-components';
import { formatDate, registerLocaleData } from '@angular/common';

interface DateConstantDescription {
  constant: string;
  format: string;
  result: string;
}

@Component({
  selector: 'hal-date-format-doc',
  templateUrl: './date-format-doc.component.html',
  styleUrls: ['./date-format-doc.component.scss']
})
export class DateFormatDocComponent implements OnInit {

  today = new Date();
  showDate = formatDate(this.today, DateConstants.dateFormat, 'en-US');

  dateConstantTable: DateConstantDescription[] = [

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
    for ( const currentDate in DateConstants ) {
      if (DateConstants.hasOwnProperty(currentDate)) {
      console.log(currentDate, DateConstants[currentDate]);
      this.dateConstantTable.push({
        constant: currentDate,
        format: DateConstants[currentDate],
        result: formatDate(this.today, DateConstants[currentDate], 'nb')
      });
      }
    }
  }
}
