import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarComponent ],
      imports: [
        RouterTestingModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    fixture.detectChanges();
  });

  it('should render a toolbar element', () => {
    expect(getElement('h1')).not.toBeNull('Should render a mat-toolbar');
  });

  it('should render a user menu element', () => {
    expect(getElement('hal-user-menu')).not.toBeNull();
  });

  it('should show a image within the hafslund logo link', () => {
    const menuElements: HTMLAnchorElement[] = getElements('.logo');
    expect(menuElements.length).toBe(1);
  });

  function getElements(selector: string) {
    return fixture.debugElement.nativeElement.querySelectorAll(selector);
  }

  function getElement(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector);
  }
});
