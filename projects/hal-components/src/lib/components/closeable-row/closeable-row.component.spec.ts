import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

import { CloseableRowComponent } from './closeable-row.component';

@Component({
  template: `
  <hal-closeable-row [noPadding]="false" [startExpanded]="true">
    <ng-container ngProjectAs="RowHeader">
      I'm in the Header!
    </ng-container>
    <ng-container ngProjectAs="RowBody">
      I'm in the Content!
    </ng-container>
</hal-closeable-row>
  `
})
class TestComponent {
  noPadding = false;
  startExpanded = true;
}

describe('CloseableRowComponent Content placement', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, CloseableRowComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  describe('should place the header and content correct', () => {

    it('should place the header content in the header section', () => {
      const Rowheader: HTMLElement = fixture.elementRef.nativeElement.querySelector('mat-expansion-panel-header');
      expect(Rowheader).not.toBeNull();
      expect(Rowheader.innerText).toContain(`I'm in the Header!`);
    });

    it('should contain the text in the content area', () => {
      const Rowheader: HTMLElement = fixture.elementRef.nativeElement.querySelector('mat-accordion');
      expect(Rowheader).not.toBeNull();
      expect(Rowheader.innerText).toContain(`I'm in the Content!`);
    });
  });
});

describe('CloseableRowComponent', () => {
  let component: CloseableRowComponent;
  let fixture: ComponentFixture<CloseableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CloseableRowComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseableRowComponent);
    component = fixture.componentInstance;
  });

  describe('should generate a component and underlying material tags', () => {

    it('should create a closeable-row element', () => {
      expect(component).toBeTruthy();
    });

    it('should have an mat-accordion element', () => {
      const container = getElementTag('mat-accordion');
      expect(container).toContain('MAT-ACCORDION');
    });

    it('should have an mat-expansion-panel element', () => {
      const container = getElementTag('mat-expansion-panel');
      expect(container).toContain('MAT-EXPANSION-PANEL');
    });

    it('should have an mat-expansion-panel-header element', () => {
      const container = getElementTag('mat-expansion-panel-header');
      expect(container).toContain('MAT-EXPANSION-PANEL-HEADER');
    });

    it('should have an mat-panel-title element', () => {
      const container = getElementTag('mat-panel-title');
      expect(container).toContain('MAT-PANEL-TITLE');
    });

  });

  describe('should recieve information from inputs', () => {

    beforeEach(() => {
      component.noPadding = true;
    });

    it('should have a show content true when startExpanded is true(initial state)', () => {
      fixture.detectChanges();
      expect(component.showContent).toBe(true);
    });

    it('should have a showcontent false, when startexpanded is false', () => {
      component.startExpanded = false;
      expect(component.showContent).toBe(false);
    });

    it('should have no padding in boddy when nopadding is true', () => {
      fixture.detectChanges();
      const RowBody: HTMLElement = getElementStyle('mat-accordion');
      expect(RowBody).toContain('--body-padding: 0px 0px;');
    });

    it('should toggle between open and close state', () => {
      fixture.detectChanges();
      expect(component.showContent).toBe(true);
      component.toggle();
      fixture.detectChanges();
      expect(component.showContent).toBe(false);
      component.toggle();
      fixture.detectChanges();
      expect(component.showContent).toBe(true);
    });
  });

  function getElementStyle(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector).style.cssText;
  }
  function getElementTag(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector).tagName;
  }
});
