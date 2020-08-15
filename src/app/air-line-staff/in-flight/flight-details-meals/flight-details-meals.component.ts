import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { Passenger } from 'src/app/Passenger';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ActionsComponent } from '../actions/actions.component';
import { InflightServiceService } from '../inflight-service.service';
import { InflightServicesComponent } from '../inflight-services/inflight-services.component';
import { ChangeMealComponent } from '../change-meal/change-meal.component';
import { seatsBook } from 'src/app/SeatLayout';

export class SpecialMeals {
  seatNo: number
  colour: string
}

@Component({
  selector: 'app-flight-details-meals',
  templateUrl: './flight-details-meals.component.html',
  styleUrls: ['./flight-details-meals.scss']
})
export class FlightDetailsMealsComponent implements OnInit {
  flightId : number;
  flight: any;
  specialMeals: SpecialMeals[] = [];
  passengers: Passenger[] = [];
  special: SpecialMeals;
  displayedColumns: string[] = ['passengerId', 'name', 'seatNo', 'ancillaryService', 'Action'];
  ELEMENT_DATA: Passenger[] = [];
  dataSource: any;
  noOfPassengers: number;
  dialogData: Passenger;
  checkedSeat: String[]=[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  result: Passenger;
  flight1: any;
  rows = new Array();
  seatsLayout: seatsBook = {
    totalRows: 9,
    seatsPerRow: 6,
    seatNaming: 'rowType',
    booked: this.checkedSeat
  }
  constructor(private route : ActivatedRoute,private inFlightService: InflightServiceService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {    
      this.checkedSeat=[];
      this.flight = JSON.parse(localStorage['flight']);
      this.inFlightService.getFlightByFlightId(this.flight.flightId).subscribe(data => {
      console.log('in flight passengers');
      console.log(data);
      this.flight=data;
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
      for( let i=0;i<this.passengers.length;i++){
        console.log(this.passengers[i].mealsList);
        let meals:String[]=[];
        if(this.passengers[i].mealsList == null || this.passengers[i].mealsList == undefined)
          this.passengers[i].mealsList=[];
        if(this.passengers[i].mealsList.length != 0){
          console.log(this.flight.passengers[i].seatNo);
          this.checkedSeat.push(this.flight.passengers[i].seatNo);
        }
      }
      console.log(this.checkedSeat);
      // for( let i=0;i<this.passengers.length;i++){
      //  // console.log(this.passengers[i].mealsList);
      //   if(this.passengers[i].mealsList == null || this.passengers[i].mealsList == undefined){
      //     console.log(this.passengers[i].seatNo);
      //     this.checkedSeat=this.checkedSeat.filter(item =>item!= this.passengers[i].seatNo);
      //   }
      // }
      // console.log(this.checkedSeat);

      this.seatsLayout.booked=this.checkedSeat;
      var rows = new Array()
      var seatsInARow = new Array()
      var seatChar;
      if (this.seatsLayout != undefined && this.seatsLayout.hasOwnProperty('totalRows')) {
        if (this.seatsLayout.seatNaming = 'rowType') {
          for (let row = 0; row < this.seatsLayout.totalRows; row++) {
            for (let seats = 0; seats < this.seatsLayout.seatsPerRow; seats++) {
              seatChar = String.fromCharCode(65 + seats)
              seatsInARow.push((row + 1).toString() + seatChar);
            }
            rows.push(seatsInARow);
            seatsInARow = new Array();
          }
        }
      }
      this.rows = rows
    });

  
  }

   addServices(action: string, obj: any) {
    console.log(action);
    //console.log(obj);
    this.dialogData = obj;
    obj.action = action;
    const dialogRef = this.dialog.open(ActionsComponent, {
      height: '40%',
      width: '40%',
      data: obj
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log('after change');
      console.log(this.result);
      for (let i = 0; i < this.passengers.length; i++) {
        if (this.passengers[i].passengerId == this.result.passengerId) {
            this.passengers[i]=this.result;
        }
      }
      console.log(this.passengers);
      console.log(this.flight);
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
  changeMeals(action: string, obj: any) {
    console.log(action);
    console.log(obj);
    this.dialogData = obj;
    obj.action = action;
    const dialogRef = this.dialog.open(ChangeMealComponent, {
      height: '40%',
      width: '40%',
      data: obj
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log('after change');
      console.log(this.result);
      for (let i = 0; i < this.passengers.length; i++) {
        if (this.passengers[i].passengerId == this.result.passengerId) {
            this.passengers[i]=this.result;
        }
      }
      this.checkedSeat=[]
      console.log(this.checkedSeat);
      
      for( let i=0;i<this.passengers.length;i++){
        console.log(this.passengers[i].mealsList);
        let meals:String[]=[];
        if(this.passengers[i].mealsList == null || this.passengers[i].mealsList == undefined)
          this.passengers[i].mealsList=[];
        if(this.passengers[i].mealsList.length != 0){
          console.log(this.flight.passengers[i].seatNo);
          this.checkedSeat.push(this.flight.passengers[i].seatNo);
        }
      }
      console.log(this.checkedSeat);
      this.seatsLayout.booked=this.checkedSeat;
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
  inflightServices(action: string, obj: any) {
    console.log(action);
    console.log(obj);
    this.dialogData = obj;
    obj.action = action;
    const dialogRef = this.dialog.open(InflightServicesComponent, {
      height: '40%',
      width: '40%',
      data: obj
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log('after change');
      console.log(this.result);
      for (let i = 0; i < this.passengers.length; i++) {
        if (this.passengers[i].passengerId == this.result.passengerId) {
            this.passengers[i]=this.result;
        }
      }
      console.log(this.passengers);
     
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
