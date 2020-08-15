import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/air-line-staff/CheckIn/flight-details');
  }

}
