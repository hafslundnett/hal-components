import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { OverlayModule } from '@angular/cdk/overlay';
import { TableViewerDefaultComponent } from './table-viewer-default.component';
import { DisplayConfigPipe } from './pipes/display-config/display-config.pipe';
import { DisplayConfigFindCssPipe } from './pipes/display-config-find-css/display-config-find-css.pipe';

// TODO remove unused modules
@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSelectModule,
    OverlayModule,
    CommonModule,
  ],
  declarations: [
    TableViewerDefaultComponent,
    DisplayConfigFindCssPipe,
    DisplayConfigPipe,
    // OpenMeteringpointComponent,
    // HoverHighlightPipe,
    // IsColumnSortablePipe
  ],
  exports: [
    TableViewerDefaultComponent
  ]
})
export class TableViewerDefaultModule { }
