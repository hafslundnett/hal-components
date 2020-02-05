import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';

import { PaginatorComponent } from './paginator.component';
import { SelectorComponent } from '../selector/selector.component';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatorComponent, SelectorComponent],
      imports: [
        MatSelectModule,
        NoopAnimationsModule,
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    component.length = 100;
    component.pageSizeOptions = [10, 20, 30];
    (component as any).initPaginator();
    fixture.detectChanges();
  });

  it('When paginator gets initiated selectOptions should have same values as pageSizeOptions', () => {
    expect(component.selectOptions[0].value).toBe('10');
    expect(component.selectOptions[1].value).toBe('20');
    expect(component.selectOptions[2].value).toBe('30');
  });

  describe('Page size option', () => {
    beforeEach(() => {
      const selectElement: HTMLElement = getElement('hal-selector mat-select .mat-select-trigger');
      selectElement.click();
      fixture.detectChanges();
    });
    it('When length changes pageSizeOptions should update', () => {
      component.length = 100;
      component.pageSizeOptions = [10, 20, 30, 100, 150];
      fixture.detectChanges();
      expect(component.availablePageSizes[3]).toBeFalsy();
      component.length = 200;
      component.ngOnChanges({
        length: new SimpleChange(null, component.length, false)
      });
      fixture.detectChanges();
      expect(component.availablePageSizes[4]).toBe(150);
    });
  });

  it('When unit gets set the displayed value should change', async(() => {
    component.unit = 'entries';
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(getElement('[class="container-length-unit"]').innerHTML).toContain(component.unit);
    });
  }));

  it('If showPaging is false the paging should be removed', async(() => {
    component.showPaging = false;
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(getElementByCss('.page-navigation')).toBeFalsy();
    });
  }));

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

  describe('Page size option', () => {
    beforeEach(() => {
      const selectElement: HTMLElement = getElement('hal-selector mat-select .mat-select-trigger');
      selectElement.click();
      fixture.detectChanges();
    });

    describe('When "Alle" is selected', () => {
      beforeEach(() => {
        const options = document.querySelectorAll('mat-option');
        const lastElement = options.length - 1;
        (options.item(lastElement) as HTMLElement).click();
        fixture.detectChanges();
      });

      it('should have value length of entries', () => {
        expect(component.selectOptions.length).toEqual(component.availablePageSizes.length + 1);
        expect(component.selectedPageSize).toBe(component.length);
      });

      describe('setting a bigger length', () => {
        const newLength = 1500;
        beforeEach(fakeAsync(() => {
          component.length = newLength;
          component.ngOnChanges({
            length: new SimpleChange(null, component.length, false)
          });
          fixture.detectChanges();
          tick(100); // for the requestAnimationFrame
          fixture.detectChanges();
        }));

        it('should not have any pagination buttons', () => {
          const buttons = getElementsByCss('.paginator-button');
          expect(buttons.length).toBe(0);
        });

        it('should have and updated selectedPageSize value ', () => {
          expect(component.selectedPageSize).toBe(newLength);
        });

      });

    });

    it('should not display "Alle" if allowAll is false', () => {
      component.allowAll = false;
      component.ngOnChanges({
        length: new SimpleChange(null, component.allowAll, false)
      });
      fixture.detectChanges();
      expect(component.selectOptions.length).toEqual(component.availablePageSizes.length);
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

  function getElementByCss(className: string) {
    return fixture.debugElement.query(By.css(className));
  }

  function getElementsByCss(className: string) {
    return fixture.debugElement.queryAll(By.css(className));
  }
});
