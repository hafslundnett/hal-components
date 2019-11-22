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

  htmlCode = ` {{ today | date: dateConstants.dateFormat }}
{{ today | date: dateConstants.timeFormat }}`;

  ngOnInit() {
    Object.entries(DateConstants).forEach(([dateName, dateFormat]) => {
      this.dateConstantTable.push({
        constant: dateName,
        format: dateFormat,
        result: format(this.today, dateFormat)
      });
    });
  }
}
