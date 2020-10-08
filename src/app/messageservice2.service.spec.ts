import { TestBed } from '@angular/core/testing';

import { Messageservice2Service } from './messageservice2.service';

describe('Messageservice2Service', () => {
  let service: Messageservice2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Messageservice2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
