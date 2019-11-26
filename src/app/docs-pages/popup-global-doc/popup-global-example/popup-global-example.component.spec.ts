/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupGlobalExampleComponent } from './popup-global-example.component';
import { POPUP_GLOBAL_DATA } from '@hafslundnett/hal-components';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PopupGlobalExampleComponent', () => {
  let component: PopupGlobalExampleComponent;
  let fixture: ComponentFixture<PopupGlobalExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupGlobalExampleComponent ],
      imports: [ NoopAnimationsModule ],
      providers: [
        { provide: POPUP_GLOBAL_DATA , useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupGlobalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
