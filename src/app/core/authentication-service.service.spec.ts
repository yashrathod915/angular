import { TestBed } from '@angular/core/testing';

import { AuthenticationServiceService } from './authentication-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AuthenticationServiceService', () => {
  let service: AuthenticationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AuthenticationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check user',()=>{

    let userName:string;
    let password:string;
    service.login(userName,password);
  })
});
