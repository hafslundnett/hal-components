/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PopupGlobalService } from './popup-global.service';
import { Overlay } from '@angular/cdk/overlay';

describe('Service: PopupGlobal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopupGlobalService, Overlay]
    });
  });

  it('should ...', inject([PopupGlobalService], (service: PopupGlobalService) => {
    expect(service).toBeTruthy();
  }));
});
