import { TestBed } from '@angular/core/testing';

import { InternService } from './intern.service';

describe('InternService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InternService = TestBed.get(InternService);
    expect(service).toBeTruthy();
  });
});
