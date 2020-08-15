import { Component, OnInit} from '@angular/core';
import { Flight } from 'src/app/Flight';
import { CheckInServiceService } from 'src/app/air-line-staff/check-in/check-in-service.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  flights: Flight[] = [];
  displayedColumns: string[] = ['flightId', 'flightName', 'departurePlace', 'arrivalPlace', 'departureTime', 'arrivalTime'];
  ELEMENT_DATA: Flight[] = [];
  dataSource: any;
  flightStatus: boolean=false;
  passengersStatus:boolean=false;

 
  constructor(private checkInService: CheckInServiceService,private router: Router) { }

  ngOnInit(): void {
    this.checkInService.getAllFlights().subscribe(data => {
      console.log(data);
      this.flights = data;
      console.log(this.flights);
      this.ELEMENT_DATA = this.flights;
      this.dataSource = new MatTableDataSource<Flight>(this.ELEMENT_DATA);
      this.flightStatus=true;
    })
  }
  getRecord(selectedRow:Flight){
    this.passengersStatus=true;
    this.flightStatus=false;
    console.log('selected');
    this.checkInService.selectedFlight=selectedRow;
    localStorage['flight'] = JSON.stringify(selectedRow);
    this.router.navigateByUrl('AdminModule/dashboard');
  
  }

}
