/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ClosableRowComponent } from './closable-row.component';

fdescribe('ClosableRowComponent', () => {
  let component: ClosableRowComponent;
  let fixture: ComponentFixture<ClosableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClosableRowComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosableRowComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

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

  // Inputs validition startexpanded

  describe('should start expanded/not expanded based on [startExpanded]', () => {

    it('should start expanded when nothing is defined or set to true ', () => {
      expect(component.showContent).toEqual(true);
      component.startExpanded = true;
      fixture.detectChanges();
      expect(component.showContent).toEqual(true);
    });
  });

  function getElementTag(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector).tagName;
  }
});
