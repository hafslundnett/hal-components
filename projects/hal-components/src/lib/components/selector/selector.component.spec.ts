import { CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';

import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SelectorComponent } from './selector.component';
import { By } from '@angular/platform-browser';

fdescribe('SelectorComponent', () => {
  let component: SelectorComponent;
  let fixture: ComponentFixture<SelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorComponent],
      imports: [
        MatMenuModule,
        RouterTestingModule,
        NoopAnimationsModule,
        MatMenuModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorComponent);
    component = fixture.componentInstance;
    component.selectData = [
      {value: 'Alt1', viewValue: 'Alternative 1'},
      {value: 'Alt2', viewValue: 'Alternative 2'},
      {value: 'Alt3', viewValue: 'Alternative 3'},
    ];
    component.selected = 'Alt2';
    component.placeholder = 'PlaceholderTest';
    component.label = 'LabelTest';
    component.choiceDisabled = 'Alt3';
    fixture.detectChanges();
  });

  it('Wrapper-class hal-selector, mat-select and mat-options should exist', () => {
    expect(getElementByCss('.hal-selector')).toBeTruthy();
    expect(getElementByCss('mat-select')).toBeTruthy();
    expect(getElementByCss('mat-option')).toBeTruthy();
  });

  it('Should have same amount of options as defined in selectData', () => {
    const options = getAllElementsByCss('mat-option');
    expect(options.length).toBe(component.selectData.length);
  });

  it('Selected should be same as sent in value', () => {
    expect(getElementByCss('mat-select').nativeElement.value).toEqual('Alt2');
  });

  it('Placeholder should be same as sent in value', () => {
    expect(getElementByCss('mat-select').nativeElement.placeholder).toContain('PlaceholderTest');
  });

  it('Label should be same as sent in value', () => {
    expect(getElementByCss('.hal-selector-label').nativeElement.textContent).toContain('LabelTest');
  });

  xit('Option should be disabled if sent in as disabled', () => {
    expect(getElementByCss('.mat-option-disabled').nativeElement.value).toEqual('Alt3');
  });

  describe('If select is disabled', () => {
    beforeEach(() => {
      component.disabled = true;
      fixture.detectChanges();
    });

    it('mat-select should be disabled', () => {
      expect(getElementByCss('mat-select').nativeElement.disabled).toEqual(true);
    });
  });

  describe('If noLable is true', () => {
    beforeEach(() => {
      component.noLabel = true;
      fixture.detectChanges();
    });

    it('hal-selector-label should not exist', () => {
      expect(getElementByCss('.hal-selector-label')).toBeFalsy();
    });
  });

  describe('If option is clicked', () => {
    beforeEach(() => {
      spyOn(component, 'onSelectedChange').and.callThrough();
      console.log(getAllElementsByCss('mat-option')[0].nativeElement);
      getAllElementsByCss('mat-option')[0].nativeElement.click();
      fixture.detectChanges();
    });

    it('Click element should be selected', () => {
      expect(getElementByCss('mat-select').nativeElement.disabled).toContain(true);
    });

    it('OnSelectedChange should have emitted event', () => {
      expect(component.onSelectedChange).toHaveBeenCalled();
    });
  });

  function getElementByCss(className: string) {
    return fixture.debugElement.query(By.css(className));
  }
  function getAllElementsByCss(className: string) {
    return fixture.debugElement.queryAll(By.css(className));
  }
});
