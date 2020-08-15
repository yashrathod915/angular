import { TestBed } from '@angular/core/testing';

import { UserGaurdService } from './user-gaurd.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserGaurdService', () => {
  let service: UserGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule]
    });
    service = TestBed.inject(UserGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
