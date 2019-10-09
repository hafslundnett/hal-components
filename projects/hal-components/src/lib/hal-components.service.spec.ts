import { TestBed } from '@angular/core/testing';

import { HalComponentsService } from './hal-components.service';

describe('HalComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HalComponentsService = TestBed.get(HalComponentsService);
    expect(service).toBeTruthy();
  });
});
