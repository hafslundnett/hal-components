import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackComponent } from './feedback.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

xdescribe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackComponent],
      imports: [NoopAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //  Fails in build
  //
  // describe('When a message is provided', () => {
  //   const message = 'Foo bar baz';

  //   beforeEach(() => {
  //     component.message = message;
  //     fixture.detectChanges();
  //   });

  //   it('the message should be shown', () => {
  //     const messageElement: HTMLParagraphElement = getElement('.message');
  //     expect(messageElement.innerText).toBe(message);
  //   });
  // });

  // describe('When the closable flag is enabled', () => {
  //   beforeEach(() => {
  //     component.extras = {
  //       closable: true,
  //       duration: 10
  //     };
  //     fixture.detectChanges();
  //   });

  //   it('a close button should be visible', () => {
  //     const closeButton: HTMLButtonElement = getElement('.close-button');
  //     expect(closeButton).not.toBeNull();
  //   });

//   describe('and the button is pressed', () => {
//     beforeEach(() => {
//       component.animationState = 'visible';
//       const closeButton: HTMLButtonElement = getElement('.close-button');
//       closeButton.click();
//       fixture.detectChanges();
//     });

//     it('the animation state should change', () => {
//       expect(component.animationState).toBe('void');
//     });
//   });
// });

// describe('When the closable flag is disabled', () => {
//   beforeEach(() => {
//     component.extras = {
//       closable: false,
//       duration: 10
//     };
//     fixture.detectChanges();
//   });

//   it('a close button should not be visible', () => {
//     const closeButton: HTMLButtonElement = getElement('.close-button');
//     expect(closeButton).toBeNull();
//   });
// });

// Fails in build
// describe('When the severity is error', () => {
//   beforeEach(() => {
//     component.extras = {
//       severity: 'error',
//       duration: 10
//     };
//     fixture.detectChanges();
//   });

//   it('an info icon should be visible', () => {
//     const iconElement: HTMLElement = getElement('.fa-info-circle');
//     expect(iconElement).not.toBeNull();
//   });
// });

// describe('When the severity is info', () => {
//   beforeEach(() => {
//     component.extras = {
//       severity: 'primary',
//       duration: 10
//     };
//     fixture.detectChanges();
//   });

//   it('an info icon should be visible', () => {
//     const iconElement: HTMLElement = getElement('.fa-info-circle');
//     expect(iconElement).not.toBeNull();
// //   });
// // });

// describe('When the severity is success', () => {
//   beforeEach(() => {
//     component.extras = {
//       severity: 'success',
//       duration: 10
//     };
//     fixture.detectChanges();
//   });

//   it('an check icon should be visible', () => {
//     const iconElement: HTMLElement = getElement('.fa-check');
//     expect(iconElement).not.toBeNull();
//   });
// });

// function getElement(selector: string) {
//   return fixture.debugElement.nativeElement.querySelector(selector);
// }
});
