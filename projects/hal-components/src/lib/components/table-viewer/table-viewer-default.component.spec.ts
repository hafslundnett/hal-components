// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
// import { MatTableModule } from '@angular/material/table';

// import { DisplayConfigPipe } from '../../../shared/pipes/tabs-config/display-config.pipe';
// import { IsOriginalPointPipe } from '../../../shared/pipes/tabs-config/is-original-point.pipe';
// import { DataUniqueLengthPipe } from '../../../shared/pipes/tabs-config/data-unique-length.pipe';
// import { TopologyRolePipe } from '../../../shared/pipes/tabs-config/topology-role.pipe';
// import { DisplayConfigFindcssPipe } from '../../../shared/pipes/tabs-config/display-config-findcss.pipe';
// import { HoverHighlightPipe } from '../pipe/hover-highlight.pipe';
// import { StoreService } from '../../../core/services/store/store.service';
// import { By } from '@angular/platform-browser';
// import { TableViewerMdmComponent } fro./table-viewer-default.componentent';
// import { VeeConfig } from '../../../mdm/mdm-vee/vee-table/vee-table-config';
// import { TableViewerModes } from '../table-viewer.types';

// @Component({
//   template: `
//     <mdm-table-viewer-mdm
//       [tableConfig]="veeConfig"
//       [tableConfigStatic]="veeConfigStatic"
//       [sliceSize]="10"
//       [tableModes]="VeeMode"
//       [filteredTableConfig]="filteredTableConfig"
//     ></mdm-table-viewer-mdm>
// 	`
// })
// class TestComponent {
//   veeConfig = new VeeConfig();
//   veeConfigStatic = VeeConfig;
//   VeeMode = TableViewerModes.VeeMode;
//   filteredTableConfig = new VeeConfig();
// }

// describe('TableViewerMdmComponent using VeeConfig', () => {
//   let fixture: ComponentFixture<TestComponent>;
//   let component: TableViewerMdmComponent;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         TableViewerMdmComponent,
//         TestComponent,
//         DisplayConfigPipe,
//         IsOriginalPointPipe,
//         DataUniqueLengthPipe,
//         TopologyRolePipe,
//         DisplayConfigFindcssPipe,
//         HoverHighlightPipe
//       ],
//       imports: [MatTableModule],
//       providers: [StoreService],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TestComponent);
//     component = fixture.debugElement.query(By.css('mdm-table-viewer-mdm')).componentInstance;
//     fixture.detectChanges();
//   });

//   it('should display all columns', () => {
//     const table: HTMLElement = getElement('table');
//     expect(table.querySelectorAll('th').length).toBe(14);
//   });

//   function getElement(selector: string) {
//     return fixture.debugElement.nativeElement.querySelector(selector);
//   }
// });
