/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component } from '@angular/core';
import { PopupConnectedComponent } from './popup-connected.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  template: `
    <button cdkOverlayOrigin #trigger="cdkOverlayOrigin">Open popup</button>
    <hal-popup-connected [small]="false" [isOpen]="true" [origin]="trigger" (popupClose)="isOpen = false">
      <p name="popup-content">I'm the content</p>
    </hal-popup-connected>
  `
})
class TestComponent {
  isOpen = true;
  small = false;
  relativePositionY = 'below';
}

describe('PopupConnectedComponent', () => {
  let testComponent: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ OverlayModule, NoopAnimationsModule ],
      declarations: [ PopupConnectedComponent, TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    testComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should place the content within the popup', () => {
    const popupBody: HTMLElement = getGlobalElement('.connected-popup-body') as HTMLElement;
    const popupContent: HTMLParagraphElement = popupBody.querySelector('[name="popup-content"') as HTMLParagraphElement;
    expect(popupContent).not.toBeNull();
    expect(popupContent.innerText).toBe(`I'm the content`);
  });

  describe('When the close button is clicked', () => {
    let closeButton: HTMLButtonElement;

    beforeEach(() => {
      closeButton = getGlobalElement('.close-button') as HTMLButtonElement;
      closeButton.click();
      fixture.detectChanges();
    });

    it('a close event should be emitted', () => {
      expect(testComponent.isOpen).toBe(false);
    });
  });

  function getGlobalElement(selector: string) {
    return document.querySelector(selector);
  }
});
