/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DocSublistComponent } from './doc-sublist.component';

describe('DocSublistComponent', () => {
  let component: DocSublistComponent;
  let fixture: ComponentFixture<DocSublistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocSublistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocSublistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
