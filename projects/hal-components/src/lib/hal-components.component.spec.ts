import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalComponentsComponent } from './hal-components.component';

describe('HalComponentsComponent', () => {
  let component: HalComponentsComponent;
  let fixture: ComponentFixture<HalComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
