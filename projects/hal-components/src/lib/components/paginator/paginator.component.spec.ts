import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';

import { PaginatorComponent } from './paginator.component';
import { SelectorComponent } from '../selector/selector.component';
import { By } from '@angular/platform-browser';

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

  it('When paginator gets initiated selectData should have same values as pageSizeOptions', () => {
    expect(component.selectData[0].value).toBe('10');
    expect(component.selectData[1].value).toBe('20');
    expect(component.selectData[2].value).toBe('30');
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
});
