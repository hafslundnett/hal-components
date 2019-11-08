import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerComponent } from './divider.component';

fdescribe('DividerComponent', () => {
  let component: DividerComponent;
  let fixture: ComponentFixture<DividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DividerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render a hr element and have the class of \'divider\'', () => {
    const hr: HTMLElement = getElement('hr');
    expect(hr).not.toBeNull();
    expect(hr).toHaveClass('divider');
  });

  describe('When to add or remove the ligth directive, the class \'light\' should be toggled', () => {
    let hrElement: HTMLElement;

    it('With a ligth directive on the component, the light class should be added', () => {
      hrElement = getElement('hr');
      component.light = true;
      fixture.detectChanges();
      expect(hrElement.classList.toString()).toContain('light');
    });

    it('Without a ligth directive on the component, the light class should not be added', () => {
      hrElement = getElement('hr');
      component.light = false;
      fixture.detectChanges();
      expect(hrElement).not.toHaveClass('ligth');
    });
  });

  function getElement(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector);
  }
});
