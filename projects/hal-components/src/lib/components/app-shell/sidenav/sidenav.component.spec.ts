import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SidenavComponent } from './sidenav.component';
import { MenuElement } from './sidenav.menu-element.interface';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <hal-sidenav
      [menuItems]="menuItems"
    ></hal-sidenav>
	`
})
class TestComponent {
  menuItems: MenuElement[] = [];
}

describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let testComponent: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidenavComponent, TestComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
    component = fixture.debugElement.query(By.css('hal-sidenav')).componentInstance;
    fixture.detectChanges();
  });

  describe('gets a list of menu items', () => {
    beforeEach(() => {
      testComponent.menuItems = [{ url: 'hdd', svgName: 'analysis.svg', title: 'HDD', iconTitle: 'Hdd' }];
      fixture.detectChanges();
    });
    it('should display all menu items', () => {
      const menuElements: HTMLAnchorElement[] = getElements('.menu-item');
      expect(menuElements.length).toBe(1);
    });
  });

  /*
  gets a list of menu items
    should display all menu items
  */

  it('should start with and empty menu list', () => {
    const menuElements: HTMLAnchorElement[] = getElements('.menu-item');
    expect(menuElements.length).toBe(0);
  });

  it('should show a image within the hafslund logo link', () => {
    const menuElements: HTMLAnchorElement[] = getElements('.logo');
    expect(menuElements.length).toBe(1);
  });

  function getElement(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector);
  }

  function getElements(selector: string) {
    return fixture.debugElement.nativeElement.querySelectorAll(selector);
  }
});
