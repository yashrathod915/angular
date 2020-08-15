import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role: any;
  header: boolean = false;
  userLogin: boolean = false;
  adminLogin: boolean = false;
  curentUrl: any;
  checkInFlightDetails: boolean = false;
  inflightMealLayout: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkInFlightDetails = false;
    this.header = false;
    console.log(localStorage['role']);

    this.role = JSON.parse(localStorage['role']);
    console.log(this.role);
    if (this.role.roleId == 1 || this.role.roleId == 2)
      this.header = true;
    console.log(this.header);
    if (this.role.roleId == 2) {
      this.userLogin = true;
    }
    if (this.role.roleId == 1) {
      this.adminLogin = true;
    }
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event.url); // event.url has current url
        // your code will goes here
        this.curentUrl = event.url;
        console.log(this.curentUrl);
        if (this.curentUrl === "/air-line-staff/CheckIn/flight-passenger") {
          console.log('in flight details');
          this.checkInFlightDetails = true;
        }
        if (this.curentUrl != "/air-line-staff/CheckIn/flight-passenger") {
          console.log('in flight details');
          this.checkInFlightDetails = false;
        }
        if (this.curentUrl == "/air-line-staff/InFlight/flight-Detail-meals-layout") {
          this.inflightMealLayout = true;
        }
        else {
          this.inflightMealLayout = false;
        }
        if(this.curentUrl=="/login")
          this.header=false;
      }

    });

  }
  logout() {
    console.log('logout');
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
  userHome() {
    console.log('home');
    this.router.navigateByUrl('/air-line-staff');
  }
  undo() {
    this.router.navigateByUrl('/air-line-staff/CheckIn/flight-details');
  }
  undoMeal() {
    this.router.navigateByUrl('/air-line-staff/InFlight');
  }

  adminHome(){
    this.router.navigateByUrl('/AdminModule');
  }
}
