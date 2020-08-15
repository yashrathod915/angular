import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { LoginComponent } from './login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationServiceService } from '../../core/authentication-service.service';
import { User } from '../User';
import {  AuthService, SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { stringify } from 'querystring';
import { of } from 'rxjs';
import { provideConfig } from '../core.module';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authenticationService:AuthenticationServiceService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[RouterTestingModule,FormsModule,ReactiveFormsModule,HttpClientTestingModule],
      providers:[User,AuthenticationServiceService,SocialLoginModule, { provide: AuthServiceConfig, useFactory: provideConfig }
       ]
    })
    .compileComponents();
  }));

 

  
  beforeEach(inject([AuthenticationServiceService], (authenticationService) => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authenticationService=authenticationService;
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should Add passenger',()=>{
    let users =[];
    let user={}
    component.users=users;
    spyOn(authenticationService,'login').and.returnValues(of(user));
    component.loginUser();
  });

  // it('shoulg get fval',()=>{
  //   let val:string;
  //   component.fval();
  // })


  // it('should get ngOnit',()=>{

  //   component.ngOnInit();
  // })


  // it('should get social user',()=>{

  //   component.socialUser();
  // })



  
  
});
