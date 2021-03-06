
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';

import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SelectorComponent } from './selector.component';
import { By } from '@angular/platform-browser';
import { MatOptionModule, MatOption } from '@angular/material/core';
import { MatSelectModule, MatSelect } from '@angular/material/select';

describe('SelectorComponent', () => {
  let component: SelectorComponent;
  let fixture: ComponentFixture<SelectorComponent>;
  let matSelect: MatSelect;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorComponent],
      imports: [
        MatSelectModule,
        MatOptionModule,
        MatMenuModule,
        RouterTestingModule,
        NoopAnimationsModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  describe('Multiple select', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(SelectorComponent);
      component = fixture.componentInstance;
      component.multipleChoices = true;
      component.selectOptions = [
        {value: 'Alt1', viewValue: 'Alternative 1'},
        {value: 'Alt2', viewValue: 'Alternative 2'},
        {value: 'Alt3', viewValue: 'Alternative 3', disabled: true},
      ];
      component.selected = 'Alt2';
      component.placeholder = 'PlaceholderTest';
      component.label = 'LabelTest';
      matSelect = fixture.debugElement.query(By.css('mat-select')).context;
      fixture.detectChanges();
    });

    describe('If multipleChoices is true', () => {
      beforeEach(() => {
        const selectElement: HTMLElement = getElement('mat-select .mat-select-trigger');
        selectElement.click();
        fixture.detectChanges();
      });

      it('Should be able to select multiple', () => {
        const options = document.querySelectorAll('mat-option');
        (options.item(0) as HTMLElement).click();
        (options.item(1) as HTMLElement).click();
        fixture.detectChanges();

        expect(component.selected.length).toEqual(2);
      });
    });

    describe('If allowSelectAllOption is true', () => {
      beforeEach(() => {
        component.allowSelectAllOption = true;
        fixture.detectChanges();
        const selectElement: HTMLElement = getElement('mat-select .mat-select-trigger');
        selectElement.click();
        fixture.detectChanges();
      });
      it('Should be able to select option "Marker alle"', () => {
        component.selected = [];
        fixture.detectChanges();
        const options = document.querySelectorAll('mat-option');
        (options.item(0) as HTMLElement).click();
        fixture.detectChanges();

        const options2: MatOption[] = matSelect.options.toArray();
        expect(options2.find(opt => opt.value === component.allValue)).toBeTruthy();
        expect(component.selected.length).toEqual(3);
      });
    });
  });

  describe('Singel select', () => {
    beforeEach(() => {
      fixture = TestBed.createComponent(SelectorComponent);
      component = fixture.componentInstance;
      component.selectOptions = [
        {value: 'Alt1', viewValue: 'Alternative 1'},
        {value: 'Alt2', viewValue: 'Alternative 2'},
        {value: 'Alt3', viewValue: 'Alternative 3', disabled: true},
      ];
      component.selected = 'Alt2';
      component.placeholder = 'PlaceholderTest';
      component.label = 'LabelTest';
      matSelect = fixture.debugElement.query(By.css('mat-select')).context;
      fixture.detectChanges();
    });

    it('Should create', () => {
      expect(component).toBeTruthy();
    });

    describe('Should initate the component', () => {
      it('with disabled as false', () => {
        expect(matSelect.disabled).toEqual(false);
      });
      it('with isSmall as false', () => {
        expect(getElementByCss('mat-select.is-small')).toBeFalsy();
      });
      it('with noLabel as false', () => {
        expect(getElementByCss('.hal-selector-label')).toBeTruthy();
      });
    });

    it('Should have same amount of options as defined in selectOptions', () => {
      const options: MatOption[] = matSelect.options.toArray();
      expect(options.length).toBe(component.selectOptions.length);
    });

    it('Selected should be same as sent in value', () => {
      expect(matSelect.value).toEqual('Alt2');
    });

    it('Placeholder should be same as sent in value', () => {
      expect(matSelect.placeholder).toContain('PlaceholderTest');
    });

    it('Label should be same as sent in value', () => {
      expect(getElementByCss('.hal-selector-label').nativeElement.textContent).toContain('LabelTest');
    });

    it('Option should be disabled if sent in as disabled', () => {
      const options: MatOption[] = matSelect.options.toArray();
      const option = options.find(opt => opt.value === 'Alt3');
      if (option) {
        expect(option.disabled).toBeTruthy();
      }
    });

    describe('If select is disabled', () => {
      beforeEach(() => {
        component.disabled = true;
        fixture.detectChanges();
      });

      it('mat-select should be disabled', () => {
        expect(matSelect.disabled).toEqual(true);
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

    describe('If isSmall is true', () => {
      beforeEach(() => {
        component.isSmall = true;
        fixture.detectChanges();
      });

      it('Input should be same size as sent in', () => {
        expect(getElementByCss('mat-select.is-small')).toBeTruthy();
      });
    });

    describe('When new selected', () => {
      let spy;

      beforeEach(() => {
        spy = spyOn(component, 'onSelectedChange');
        const selectElement: HTMLElement = getElement('mat-select .mat-select-trigger');
        selectElement.click();
        fixture.detectChanges();
      });

      it('onSelectedChange should be called and selected should change', () => {
        const options = document.querySelectorAll('mat-option');
        (options.item(0) as HTMLElement).click();
        fixture.detectChanges();

        expect(matSelect.value).toEqual('Alt1');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('onSelectedChange should be called and selected should change', () => {
        const options = document.querySelectorAll('mat-option');
        (options.item(1) as HTMLElement).click();
        fixture.detectChanges();

        expect(matSelect.value).toEqual('Alt2');
        expect(spy).toHaveBeenCalledTimes(1);
      });
    });
  });

  function getElementByCss(className: string) {
    return fixture.debugElement.query(By.css(className));
  }
  function getElement(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector);
  }
});
