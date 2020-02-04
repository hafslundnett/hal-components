import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { AutocompleteComponent } from './autocomplete.component';
import { AutocompleteItem } from './autocomplete-item.interface';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightAutocomplete } from './highlight-autocomplete.pipe';

const options: AutocompleteItem[] = [
  {
    label: 'Greger',
    value: 1,
  },
  {
    label: 'Jan Greger',
    value: 2,
  },
  {
    label: 'Fride',
    value: 3,
  },
  {
    label: 'Martin',
    value: 4,
  },
  {
    label: 'Anna',
    value: 5,
  }
];

@Component({
  template: `
    <input #inputElement>
    <hal-autocomplete
      [inputText]="inputText"
      [options]="options"
      (optionSelected)="optionSelected($event)"
      [inputElement]="inputElement"
    ></hal-autocomplete>
	`
})
class TestComponent {
  inputText = '';
  options = options;
  optionSelected(event) {
    console.log('event', event);
    this.inputText = event.label;
  }
}

describe('AutocompleteComponent', () => {
  let component: AutocompleteComponent;
  let testComponent: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule],
      declarations: [AutocompleteComponent, TestComponent, HighlightAutocomplete]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
    component = fixture.debugElement.query(By.css('hal-autocomplete')).componentInstance;
    fixture.detectChanges();
  });

  it('should exist', () => {
    expect(component).toBeTruthy();
    expect(testComponent).toBeTruthy();
  });

  it(' should not be visible', () => {
    const autocomplete = getElementByCSS('.hdd-dropdown_content');
    expect(autocomplete).toBeFalsy();
  });

  describe('giving input focus', () => {
    beforeEach(() => {
      (component as any).onFocus();
      fixture.detectChanges();
    });
    it('will display autocomplete and all elements', () => {
      const autocomplete = getElementByCSS('.hdd-dropdown_content');
      expect(autocomplete).toBeTruthy();
      const autocompleteElements = getAllElementByCSS('.hdd-dropdown_content_item');
      expect(autocompleteElements).toBeTruthy();
      expect(autocompleteElements.length).toBe(options.length);
    });

    describe('selecting first element by keyboard', () => {
      beforeEach(() => {
        spyOn(testComponent, 'optionSelected');
        (component as any).keySubmit();
        fixture.detectChanges();
      });
      it('will send first that element', () => {
        expect(testComponent.optionSelected).toHaveBeenCalledWith(options[0]);
      });
      it('will close autocomplete', () => {
        const autocomplete = getElementByCSS('.hdd-dropdown_content');
        expect(autocomplete).toBeFalsy();
      });
    });

    describe('selecting second element by keyboard', () => {
      beforeEach(() => {
        spyOn(testComponent, 'optionSelected');
        (component as any).keyDown();
        (component as any).keySubmit();
        fixture.detectChanges();
      });
      it('will send secound that element', () => {
        expect(testComponent.optionSelected).toHaveBeenCalledWith(options[1]);
      });
      it('will close autocomplete', () => {
        const autocomplete = getElementByCSS('.hdd-dropdown_content');
        expect(autocomplete).toBeFalsy();
      });
    });

    describe('selecting up on keyboard', () => {
      beforeEach(() => {
        spyOn(testComponent, 'optionSelected');
        (component as any).keyUp();
        (component as any).keySubmit();
        fixture.detectChanges();
      });
      it('will send out last element', () => {
        expect(testComponent.optionSelected).toHaveBeenCalledWith(options[options.length - 1]);
      });
      it('will close autocomplete', () => {
        const autocomplete = getElementByCSS('.hdd-dropdown_content');
        expect(autocomplete).toBeFalsy();
      });
    });

    describe('pressing escape', () => {
      beforeEach(() => {
        (component as any).keyExit();
        fixture.detectChanges();
      });
      it('will close autocomplete', () => {
        const autocomplete = getElementByCSS('.hdd-dropdown_content');
        expect(autocomplete).toBeFalsy();
      });
    });

    describe('writing Greger', () => {
      beforeEach(() => {
        testComponent.inputText = 'Greger';
        fixture.detectChanges();
      });
      it('gives two options', () => {
        const autocompleteElements = getAllElementByCSS('.hdd-dropdown_content_item');
        expect(autocompleteElements).toBeTruthy();
        expect(autocompleteElements.length).toBe(2);
      });
    });

    describe('writing Jan Greger', () => {
      beforeEach(() => {
        testComponent.inputText = 'Jan Greger';
        fixture.detectChanges();
      });
      it('gives zero options', () => {
        const autocompleteElements = getAllElementByCSS('.hdd-dropdown_content_item');
        expect(autocompleteElements).toBeTruthy();
        expect(autocompleteElements.length).toBe(0);
      });
    });

    describe('writing Hans', () => {
      beforeEach(() => {
        testComponent.inputText = 'Hans';
        fixture.detectChanges();
      });
      it('gives zero options', () => {
        const autocompleteElements = getAllElementByCSS('.hdd-dropdown_content_item');
        expect(autocompleteElements).toBeTruthy();
        expect(autocompleteElements.length).toBe(0);
      });
      it('will close autocomplete', () => {
        const autocomplete = getElementByCSS('.hdd-dropdown_content');
        expect(autocomplete).toBeFalsy();
      });
    });

    describe('clicking second element', () => {
      beforeEach(() => {
        spyOn(testComponent, 'optionSelected');
        component.optionClicked(options[1]);
        fixture.detectChanges();
      });
      it('will output second element element', () => {
        expect(testComponent.optionSelected).toHaveBeenCalledWith(options[1]);
      });
      it('will close autocomplete', () => {
        const autocomplete = getElementByCSS('.hdd-dropdown_content');
        expect(autocomplete).toBeFalsy();
      });
    });

    describe('removing focus ', () => {
      beforeEach(fakeAsync (() => {
        (component as any).onBlur();
        tick(150);
        fixture.detectChanges();
      }));
      it('will close autocomplete', () => {
        const autocomplete = getElementByCSS('.hdd-dropdown_content');
        expect(autocomplete).toBeFalsy();
      });
    });

    describe('entering some text, then removing it all', () => {
      beforeEach(() => {
        testComponent.inputText = 'Greger';
        fixture.detectChanges();
        testComponent.inputText = '';
        fixture.detectChanges();
      });
      it('will display autocomplete', () => {
        const autocomplete = getElementByCSS('.hdd-dropdown_content');
        expect(autocomplete).toBeTruthy();
      });
      it('will display all choices', () => {
        const autocompleteElements = getAllElementByCSS('.hdd-dropdown_content_item');
        expect(autocompleteElements.length).toBe(options.length);
      });
    });

  });

  function getElementByCSS(css: string) {
    return fixture.debugElement.query(By.css(css));
  }
  function getAllElementByCSS(css: string) {
    return fixture.debugElement.queryAll(By.css(css));
  }
});
