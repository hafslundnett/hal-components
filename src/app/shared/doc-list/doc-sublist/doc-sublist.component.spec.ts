/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DocSublistComponent } from './doc-sublist.component';
import { DocCardComponent } from '../../doc-card/doc-card.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DocSublistComponent', () => {
  let component: DocSublistComponent;
  let fixture: ComponentFixture<DocSublistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ DocSublistComponent, DocCardComponent ]
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
