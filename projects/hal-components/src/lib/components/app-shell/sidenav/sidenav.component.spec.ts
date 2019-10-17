import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SidenavComponent } from './sidenav.component';

describe('SidenavComponent', () => {
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavComponent ],
      imports: [ RouterTestingModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    fixture.detectChanges();
  });

  it('should show a list with menu items', () => {
    const menuElements: HTMLAnchorElement[] = getElements('.menu-item');
    expect(menuElements.length).toBeGreaterThan(0);
  });

  it('should show a image within the hafslund logo link', () => {
    const logoElement: HTMLAnchorElement = getElement('.logo');
    expect(logoElement.querySelector('img')).toBeDefined();
  });

  function getElement(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector);
  }

  function getElements(selector: string) {
    return fixture.debugElement.nativeElement.querySelectorAll(selector);
  }
});
