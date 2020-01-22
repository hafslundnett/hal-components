/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { PopupConnectedComponent } from './popup-connected.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  template: `
    <button cdkOverlayOrigin #trigger="cdkOverlayOrigin">Open popup</button>
    <hal-popup-connected
      [isOpen]="isOpen"
      [small]="small"
      [origin]="trigger"
      [relativePositionY]="relativePositionY"
      (popupClose)="isOpen = false"
    >
      <p name="popup-content">I'm the content</p>
    </hal-popup-connected>
  `
})
class TestComponent {
  isOpen = true;
  small = false;
  alignTop = false;
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

  it('should not be small by default, close-button should exist, should not have class small-popup', () => {
    expect(fixture.debugElement.queryAll(By.css('.small-popup')).length).toBe(0);
    expect(fixture.debugElement.queryAll(By.css('.close-button')).length).toBe(1);
  });

  it('arrow-above should exist', () => {
    expect(fixture.debugElement.queryAll(By.css('.arrow-above')).length).toBe(1);
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

  describe('Setting small to true', () => {
    beforeEach(() => {
      testComponent.small = true;
      fixture.detectChanges();
    });
    it('close-button should not exist, should have class small-popup', () => {
      expect(fixture.debugElement.queryAll(By.css('.small-popup')).length).toBe(1);
      expect(fixture.debugElement.queryAll(By.css('.close-button')).length).toBe(0);
    });
  });

  describe('Setting small to false', () => {
    beforeEach(() => {
      testComponent.small = false;
      fixture.detectChanges();
    });
    it('close-button should exist, should not have class small-popup', () => {
      expect(fixture.debugElement.queryAll(By.css('.small-popup')).length).toBe(0);
      expect(fixture.debugElement.queryAll(By.css('.close-button')).length).toBe(1);
    });
  });

  describe('Setting relativePositionY to above', () => {
    beforeEach(() => {
      testComponent.alignTop = true;
      fixture.detectChanges();
    });
    it('arrow-below should exist', () => {
      expect(fixture.debugElement.queryAll(By.css('.arrow-below')).length).toBe(1);
    });
  });

  describe('Setting relativePositionY to below', () => {
    beforeEach(() => {
      testComponent.alignTop = false;
      fixture.detectChanges();
    });
    it('arrow-above should exist', () => {
      expect(fixture.debugElement.queryAll(By.css('.arrow-above')).length).toBe(1);
    });
  });

  function getGlobalElement(selector: string) {
    return document.querySelector(selector);
  }
});
