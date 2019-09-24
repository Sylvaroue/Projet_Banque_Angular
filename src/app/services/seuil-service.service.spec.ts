import { TestBed } from '@angular/core/testing';

import { SeuilServiceService } from './seuil-service.service';

describe('SeuilServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeuilServiceService = TestBed.get(SeuilServiceService);
    expect(service).toBeTruthy();
  });
});
