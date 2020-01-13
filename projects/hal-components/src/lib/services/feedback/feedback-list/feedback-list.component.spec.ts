import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackListComponent } from './feedback-list.component';
import { FeedbackComponent } from '../feedback.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FeedbackListComponent', () => {
  let component: FeedbackListComponent;
  let fixture: ComponentFixture<FeedbackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackListComponent, FeedbackComponent],
      imports: [NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackListComponent);
    component = fixture.componentInstance;

    component.feedbackMessageList = [
      { message: 'Great Success', extras: { severity: 'success', duration: 2000, closable: true}, id: 1 },
      { message: 'Oh no Dange!', extras: { severity: 'warn', duration: 2000, closable: true}, id: 2 },
      { message: 'ok, something went wrong', extras: { severity: 'error', duration: 2000, closable: true}, id: 3 },
    ];
    fixture.detectChanges();
  });

  it('should exist', () => {
    expect(component).toBeTruthy();
  });

  it('should contain three elements', () => {
    const messageList = document.getElementsByTagName('hal-feedback');
    expect(component.feedbackMessageList.length).toBe(messageList.length);
  });
});
