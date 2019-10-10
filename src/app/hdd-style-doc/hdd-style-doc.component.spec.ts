/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HddStyleDocComponent } from './hdd-style-doc.component';

describe('HddStyleDocComponent', () => {
  let component: HddStyleDocComponent;
  let fixture: ComponentFixture<HddStyleDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HddStyleDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HddStyleDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
