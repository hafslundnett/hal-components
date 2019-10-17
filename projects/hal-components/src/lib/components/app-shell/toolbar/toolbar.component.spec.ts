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
    expect(getElement('mat-toolbar')).not.toBeNull('Should render a mat-toolbar');
  });

  it('should render a title element', () => {
    expect(getElement('.title')).not.toBeNull();
  });

  it('should render a user menu element', () => {
    expect(getElement('mdm-user-menu')).not.toBeNull();
  });

  function getElement(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector);
  }
});
