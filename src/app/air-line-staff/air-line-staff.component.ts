import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export interface passenger {
  id: number,
  name: string,
  seatno: number
}
@Component({
  selector: 'app-air-line-staff',
  templateUrl: './air-line-staff.component.html',
  styleUrls: ['./air-line-staff.component.css']
})

export class AirLineStaffComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
 
  }
  checkIn() {
    console.log('checkIn');
     this.router.navigateByUrl('/air-line-staff/CheckIn');

  }
  inFlight() {
    console.log('in flight');
    this.router.navigateByUrl('/air-line-staff/InFlight');

  }

}
