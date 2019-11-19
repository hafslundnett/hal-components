import { DisplayDataFunc } from './display-data-func.type';

export interface DetailsTabColumn<ConfigDataType> {
  columnName: string;
  headerName: string;
  headerFullName: string;
  extraCssClasses: string;
  displayDataFunc: DisplayDataFunc<ConfigDataType>;
  dateFormat?: string | null;
  sortable?: boolean;
  specialDisplayType?: any; // TODO
  dynamicCssClasses?: DisplayDataFunc<ConfigDataType> | undefined;
}
