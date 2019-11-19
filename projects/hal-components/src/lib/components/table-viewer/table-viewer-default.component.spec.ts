import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { DetailsTabColumn } from './table-engine/details-tab-column.interface';
import { TableEngine } from './table-engine/table-engine';
import { TableViewerDefaultComponent } from './table-viewer-default.component';
import { DisplayConfigPipe } from './pipes/display-config/display-config.pipe';
import { DisplayConfigFindCssPipe } from './pipes/display-config-find-css/display-config-find-css.pipe';
import { By } from '@angular/platform-browser';
import { IsColumnSortablePipe } from './pipes/is-column-sortable/is-column-sortable.pipe';

export class TestTableConfig extends TableEngine<any> {
  static columnConfiguration: DetailsTabColumn<any>[] = [
    {
      columnName: 'name',
      headerName: 'Name',
      displayDataFunc: (data: any) => data.name,
    },
  ];
  constructor() {
    super();
    TestTableConfig.columnConfiguration
      .forEach(column => this.addTabColumn(column));
  }
}

@Component({
  template: `
    <hal-table-viewer-default
      [tableConfig]="config"
      [tableConfigStatic]="configStatic"
      [sliceSize]="10"
      [filteredTableConfig]="filteredTableConfig"
    ></hal-table-viewer-default>
	`
})
class TestComponent {
  config = new TestTableConfig();
  configStatic = TestTableConfig;
  filteredTableConfig = new TestTableConfig();
}

describe('TableViewerDefaultComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TableViewerDefaultComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableViewerDefaultComponent,
        TestComponent,
        DisplayConfigPipe,
        DisplayConfigFindCssPipe,
        IsColumnSortablePipe,
      ],
      imports: [MatTableModule],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.debugElement.query(By.css('hal-table-viewer-default')).componentInstance;
    fixture.detectChanges();
  });

  it('should display all columns', () => {
    const table: HTMLElement = getElement('table');
    expect(table.querySelectorAll('th').length).toBe(1);
  });

  function getElement(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector);
  }
});
