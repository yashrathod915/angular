import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/Flight';
import { Router  } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { InflightServiceService } from './inflight-service.service';

@Component({
  selector: 'app-in-flight',
  templateUrl: './in-flight.component.html',
  styleUrls: ['./in-flight.component.css']
})
export class InFlightComponent implements OnInit {
  flight: Flight[] = [];
  displayedColumns: string[] = ['flightId', 'flightName', 'departurePlace', 'arrivalPlace', 'departureTime', 'arrivalTime'];
  ELEMENT_DATA: Flight[] = [];
  dataSource: any;
  constructor(private inFlightService: InflightServiceService, private router: Router) { }

  ngOnInit(): void {
    this.inFlightService.getAllFlights().subscribe(data => {
      console.log(data);
      this.flight = data;
      console.log(this.flight);
      this.ELEMENT_DATA = this.flight;
      this.dataSource = new MatTableDataSource<Flight>(this.ELEMENT_DATA);
    })
  }
  getRecord(selectedRow:Flight){
    console.log('selected');
    this.inFlightService.selectedFlight=selectedRow;
    localStorage['flight'] = JSON.stringify(selectedRow);
   this.router.navigateByUrl('air-line-staff/InFlight/flight-Detail-meals-layout');
  }

}
