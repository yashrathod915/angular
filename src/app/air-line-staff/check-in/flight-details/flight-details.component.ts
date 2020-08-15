import { Component, OnInit } from '@angular/core';
import { CheckInServiceService } from '../check-in-service.service';
import { Flight } from '../../../Flight';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
// For MDB Angular Pro

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
  flight: Flight[] = [];
  displayedColumns: string[] = ['flightId', 'flightName', 'departurePlace', 'arrivalPlace', 'departureTime', 'arrivalTime'];
  ELEMENT_DATA: Flight[] = [];
  dataSource: any;
  constructor(private checkInService: CheckInServiceService,private router: Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    //  /** spinner starts on init */
    //  this.spinner.show();
 
    //  setTimeout(() => {
    //    /** spinner ends after 5 seconds */
    //    this.spinner.hide();
    //  }, 5000);
   
    this.checkInService.getAllFlights().subscribe(data => {
      console.log('in on');
      console.log(data);
      this.flight = data;
      console.log(this.flight);
      this.ELEMENT_DATA = this.flight;
      this.dataSource = new MatTableDataSource<Flight>(this.ELEMENT_DATA);
    })
  }
  getRecord(selectedRow:Flight){
    console.log('selected');
    this.checkInService.selectedFlight=selectedRow;
    localStorage['flight'] = JSON.stringify(selectedRow);
    this.router.navigateByUrl('air-line-staff/CheckIn/flight-passenger');
  }



}
