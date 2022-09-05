import { TestBed } from '@angular/core/testing';

import { UsaPeopleService } from './usa-people.service';

describe('UsaPeopleService', () => {
  let service: UsaPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsaPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
