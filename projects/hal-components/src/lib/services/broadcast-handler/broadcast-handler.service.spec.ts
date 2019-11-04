/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BroadcastHandlerService } from './broadcast-handler.service';

describe('Service: BroadcastHandler', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BroadcastHandlerService]
    });
  });

  it('should ...', inject([BroadcastHandlerService], (service: BroadcastHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
