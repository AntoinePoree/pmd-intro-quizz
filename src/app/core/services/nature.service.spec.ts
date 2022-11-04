/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NatureService } from './nature.service';

describe('Service: Nature', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NatureService]
    });
  });

  it('should ...', inject([NatureService], (service: NatureService) => {
    expect(service).toBeTruthy();
  }));
});
