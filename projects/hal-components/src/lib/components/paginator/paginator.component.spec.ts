import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';
import { SelectModule } from '@hafslundnett/hdd-ng-components';

import { PaginatorComponent } from './paginator.component';
import { Pagination } from '../../interfaces';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorComponent],
      imports: [
        MatSelectModule,
        NoopAnimationsModule,
        SelectModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    component.length = 100;
    (component as any).initPaginator();
    fixture.detectChanges();
  });

  describe('When there are above 10 summaries', () => {
    const length = 48;
    const pageSize = 10;

    beforeEach(() => {
      component.length = length;
      component.selectedPageSize = pageSize;
      (component as any).initPaginator();
    });

    it('10 rows should initially be shown', () => {
      expect(component.availablePageSizes[0]).toBe(10);
    });

    it('number of pages should be calculated', () => {
      expect(component.pages.length).toBe(5);
    });
  });

  describe('When there are less than 5 summaries', () => {
    const length = 3;

    beforeEach(() => {
      component.length = length;
      (component as any).initPaginator();
    });

    it('number of rows should be the same as number of summaries', () => {
      expect(component.availablePageSizes[0]).toBe(length);
    });
  });

  describe('When a new option is selected', () => {
    beforeEach(() => {
      component.length = 42;
      (component as any).initPaginator();
      fixture.detectChanges();
      spyOn(component.change, 'emit');
      const selectElement: HTMLElement = getElement('mat-select .mat-select-trigger');
      selectElement.click();
      fixture.detectChanges();
      const options = document.querySelectorAll('mat-option');
      (options.item(1) as HTMLElement).click();
      fixture.detectChanges();
    });

    it('the number of rows are increased', () => {
      expect(component.change.emit).toHaveBeenCalledWith({
        length: component.length,
        pageIndex: 0,
        pageSize: 20
      } as Pagination);
    });
  });

  describe('When next page is selected', () => {
    beforeEach(() => {
      component.length = 42;
      component.selectedPageSize = 10;
      component.selectedPageIndex = 0;
      (component as any).initPaginator();
      fixture.detectChanges();
      const nextButton: HTMLButtonElement = getElement('[name="next-button"]');
      nextButton.click();
      fixture.detectChanges();
    });

    it('the page index should increase', () => {
      expect(component.selectedPageIndex).toBe(1);
    });
  });

  describe('When previous page is selected', () => {
    beforeEach(() => {
      component.length = 42;
      component.selectedPageSize = 10;
      component.selectedPageIndex = 5;
      (component as any).initPaginator();
      fixture.detectChanges();
      const previousButton: HTMLButtonElement = getElement('[name="previous-button"]');
      previousButton.click();
      fixture.detectChanges();
    });

    it('the page index should decrease', () => {
      expect(component.selectedPageIndex).toBe(4);
    });
  });

  function getElement(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector);
  }
});
