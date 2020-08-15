import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from '../../core/authentication-service.service';
import { User } from '../User';
import { SocialUser, GoogleLoginProvider, AuthService } from 'angularx-social-login';

export interface role{
  roleId: number
  roleName: string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  hide = true;
  loginForm: FormGroup;
  users: User[] = [];
  u: User;
  social: SocialUser;
  role: role;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationServiceService,
    private authservice: AuthService
  ) { }

  ngOnInit() {
    localStorage.clear();
    this.reactiveForm();

  }

  /* Reactive form */
  reactiveForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  get fval() {
    return this.loginForm.controls;
  }

  loginUser() {
    console.log(this.loginForm.value);
    this.authenticationService.login(this.loginForm.value.userName, this.loginForm.value.password).subscribe((data) => {
      console.log(data);
      this.users = data;
      //     console.log(this.users);  
      this.u = this.users.filter(x => x.userName === this.loginForm.value.userName && x.password === this.loginForm.value.password)[0];
      console.log(this.u);
      if (this.u.role.roleId == 2) {
        console.log(this.u.role.roleId);
        localStorage.setItem("user", JSON.stringify(this.u).toString())
        localStorage.setItem("role", JSON.stringify(this.u.role).toString())
        this.router.navigate(['air-line-staff'])
      } else if (this.u.role.roleId == 1) {
        console.log(this.u.role.roleId);
        localStorage.setItem("admin", JSON.stringify(this.u).toString())
        localStorage.setItem("role", JSON.stringify(this.u.role).toString())
        this.router.navigate(['AdminModule'])
      }

    }, () => {
      // Swal.fire('', fail.error.message, 'error')
      console.log('error');
    })

  }

  socialUser(): void {
    this.authservice.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => {
      this.social = x;
      console.log(this.social);
      this.u = {} as User;
      this.role= {} as role;
      this.role.roleId=2;
      this.role.roleName="user";
      this.u.id=2;
      this.u.userName="user";
      this.u.password="user";
      this.u.role=this.role;
      localStorage.setItem("user", JSON.stringify(this.u).toString())
      localStorage.setItem("role", JSON.stringify(this.u.role).toString())
      //this.authenticationService.socialLogin(this.social)
      this.router.navigateByUrl('/air-line-staff');
    });
  }





}
