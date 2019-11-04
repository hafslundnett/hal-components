import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerComponent } from './divider.component';

describe('DividerComponent', () => {
  let component: DividerComponent;
  let fixture: ComponentFixture<DividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render a hr element', () => {
    const hr: HTMLElement = getElement('hr');
    expect(hr).not.toBeNull();
    expect(hr.classList.toString()).toBe('divider');
  });

  describe('When the light flag is enabled', () => {
    let hrElement: HTMLElement;

    beforeEach(() => {
      hrElement = getElement('hr');
      component.light = true;
      fixture.detectChanges();
    });

    it('a light css class should be added to the element', () => {
      expect(hrElement.classList.toString()).toContain('light');
    });
  });

  function getElement(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector);
  }
});
