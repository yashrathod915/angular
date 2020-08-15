import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Passenger } from 'src/app/Passenger';
import { MatPaginator } from '@angular/material/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { InflightServiceService } from 'src/app/air-line-staff/in-flight/inflight-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AddServicesComponent } from '../add-services/add-services.component';
import { ChangeMealsPrefrencesComponent } from '../change-meals-prefrences/change-meals-prefrences.component';
import { OnlineServiceComponent } from '../online-service/online-service.component';
import { UpdatePassengerComponent } from '../update-passenger/update-passenger.component';
import { AddPassengerComponent } from '../add-passenger/add-passenger.component';
import { ChangeFlightServicesComponent } from '../change-flight-services/change-flight-services.component';
import { Flight } from 'src/app/Flight';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  checkedSeat: String[]=[];
  addServices() {
    throw new Error("Method not implemented.");
  }
  flightId: number;
  flight: any;
  passengers: Passenger[] = [];
  displayedColumns: string[] = ['passengerId', 'name', 'seatNo', 'ancillaryService'];
  passengerDetailsColumn: string[] = ['passengerId', 'name', 'seatNo', 'passport', 'address','dob', 'Action'];
  ELEMENT_DATA: Passenger[] = [];
  dataSource: any;
  noOfPassengers: number;
  dialogData: Passenger;
  filteredPassengers: Passenger[] = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  result: Passenger;
  f: Flight;
  flight1: any;
  filters: string[] = ['No Date of birth','No Passport No', 'No address', 'none'];
  lastSeatNo: number;
  lastPassengerNo: number;
  newPassenger: Passenger;
  totalSeat = ['1A', '1B', '1C', '1D', '1E', '1F', '2A', '2B', '2C', '2D', '2E', '2F',
  '3A', '3B', '3C', '3D', '3E', '3F',
  '4A', '4B', '4C', '4D', '4E', '4F',
  '5A', '5B', '5C', '5D', '5E', '5F',
  '6A', '6B', '6C', '6D', '6E', '6F',
  '7A', '7B', '7C', '7D', '7E', '7F',
  '8A', '8B', '8C', '8D', '8E', '8F',
  '9A', '9B', '9C', '9D', '9E', '9F'];
  remainingSeatList : String[]=[]
  constructor(private route: ActivatedRoute, private inFlightService: InflightServiceService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.flight = JSON.parse(localStorage['flight']);
    this.inFlightService.getFlightByFlightId(this.flight.flightId).subscribe(data => {
      console.log('in flight passengers');
      console.log(data);
      this.flight = data;
      console.log(this.flight);
      console.log('here');
      console.log(this.flight.flightId);
      this.passengers = this.flight.passengers;
      this.noOfPassengers = this.passengers.length;
      console.log(this.passengers);
      this.ELEMENT_DATA = this.passengers;
      this.dataSource = new MatTableDataSource<Passenger>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      console.log(this.ELEMENT_DATA);
      this.inFlightService.selectedFlight=this.flight;

    
    });
  }

  filterselect(value) {
    console.log(value);
    if (value === "No Passport No")
      this.filteredPassengers = this.passengers.filter((item) => (item.passport === null));
    else if (value === "No address")
      this.filteredPassengers = this.passengers.filter((item) => (item.address === null));
    else if (value == 'none')
      this.filteredPassengers = this.passengers.filter((item) => (item));
    else if (value == 'No Date of birth')
      this.filteredPassengers = this.passengers.filter((item) => (item.dob === null));

    console.log(this.filteredPassengers);
    this.dataSource = this.filteredPassengers;
    this.noOfPassengers = this.filteredPassengers.length;
  }
  addPassenger() {
    for( let i=0;i<this.flight.passengers.length;i++){
      if(this.flight.passengers[i].seatNo!=null){
        console.log(this.flight.passengers[i].seatNo);
        this.checkedSeat.push(this.flight.passengers[i].seatNo);
      }
    }

    console.log(this.checkedSeat);
    this.remainingSeatList=this.totalSeat;
    for(let i=0;i<this.checkedSeat.length;i++){
      this.remainingSeatList=this.remainingSeatList.filter(item =>item !=this.checkedSeat[i]);
    }
    console.log(this.remainingSeatList);
    let obj=this.remainingSeatList;
    console.log('add passenger');
    const dialogRef = this.dialog.open(AddPassengerComponent, {
      maxWidth: "800px",
      data: obj
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log('after change');
      console.log(this.result);
      //this.lastSeatNo = this.passengers[this.passengers.length - 1].seatNo;
      this.lastPassengerNo = this.passengers[this.passengers.length - 1].passengerId;
      console.log(this.lastPassengerNo + '' + this.lastSeatNo);
      this.result.passengerId = this.lastPassengerNo + 1;
     // this.result.seatNo = this.lastSeatNo + 1;
      console.log(this.result['data']);

      this.newPassenger = this.result['data'];
     // this.newPassenger.seatNo = this.lastSeatNo + 1;
      this.newPassenger.passengerId = this.lastPassengerNo + 1;
      this.passengers.push(this.newPassenger);
      console.log(this.newPassenger);
      this.flight.passengers = this.passengers;
      console.log(this.flight.passengers);
      
      this.inFlightService.updatePassengerStatus(this.flight.flightId, this.flight).subscribe(
        data => {
          console.log('updated services');
          console.log(data);
          localStorage['flight'] = JSON.stringify(data);
        }
      )
      this.ELEMENT_DATA = this.passengers;
      this.dataSource = new MatTableDataSource<Passenger>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      console.log(this.ELEMENT_DATA);
    // location.reload();
     });
  }

  updateDetails(action: string, obj: any) {
    console.log(action);
    console.log(obj);
    const dialogRef = this.dialog.open(UpdatePassengerComponent, {
      maxWidth: "800px",
      data: obj
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log('after change');
      console.log(this.result);
      for (let i = 0; i < this.passengers.length; i++) {
        if (this.passengers[i].passengerId == this.result.passengerId) {
          this.passengers[i] = this.result;
        }
      }
      console.log(this.passengers);
      this.flight.passengers = this.passengers;
      this.inFlightService.updatePassengerStatus(this.flight.flightId, this.flight).subscribe(
        data => {
          console.log('updated services');
          console.log(data);
          localStorage['flight'] = JSON.stringify(data);
        }
      )
     //location.reload();
    });
  }

  changeMeals() {
    this.dialogData = this.flight;
 
    const dialogRef = this.dialog.open(ChangeMealsPrefrencesComponent, {
      height: '30%',
      width: '40%',
      data: this.flight
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log('after change');
      console.log(this.result);
    console.log(this.flight);
    // this.flight.foodItems=this.result.foodItems;
      this.inFlightService.updatePassengerStatus(this.flight.flightId, this.flight).subscribe(
        data => {
          console.log('updated services');
          console.log(data);
          localStorage['flight'] = JSON.stringify(data);
        }
      )
    //location.reload();
    });
  }

  changeService(){
    this.dialogData = this.flight;
    const dialogRef = this.dialog.open(ChangeFlightServicesComponent, {
      height: '30%',
      width: '40%',
      data: this.flight
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log('after change');
      console.log(this.result);
    
      this.flight.ancillaryService = this.result.ancillaryService;
      this.inFlightService.updatePassengerStatus(this.flight.flightId, this.flight).subscribe(
        data => {
          console.log('updated services');
          console.log(data);
          localStorage['flight'] = JSON.stringify(data);
        }
      )
      //location.reload();
    });

  }
  inflightServices() {
    this.dialogData = this.flight;
 
    const dialogRef = this.dialog.open(OnlineServiceComponent, {
      height: '30%',
      width: '40%',
      data: this.flight
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log('after change');
      console.log(this.result);
    console.log(this.flight);
   
      this.inFlightService.updatePassengerStatus(this.flight.flightId, this.flight).subscribe(
        data => {
          console.log('updated services');
          console.log(data);
          localStorage['flight'] = JSON.stringify(data);
        }
      )
   // location.reload();
    });
  }
 

}
