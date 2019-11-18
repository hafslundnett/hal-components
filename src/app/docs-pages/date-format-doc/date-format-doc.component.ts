import { Component, OnInit } from '@angular/core';
import { DateConstants } from '@hafslundnett/hal-components';
import { format } from 'date-fns';

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

  public readonly dateConstants = DateConstants;

  today = new Date();
  dateConstantTable: DateConstantDescription[] = [];

  formatTsCode = 'format(new Date(), DateConstants.dateFormat);';

  tsCode = `public readonly dateConstants = DateConstants;
  today = new Date();`;

  htmlCode = `{{ today | date: dateConstants.csvDateFormat }}
{{ today | date: dateConstants.dotddmmyyhhmm }}
{{ today | date: dateConstants.ddDashMM }}`;

  ngOnInit() {
    for ( const currentDate in DateConstants ) {
      if (DateConstants.hasOwnProperty(currentDate)) {
      this.dateConstantTable.push({
        constant: currentDate,
        format: DateConstants[currentDate],
        result: format(this.today, DateConstants[currentDate])
      });
      }
    }
  }
}
