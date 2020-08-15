import { Component, OnInit, ViewChild } from '@angular/core';
import { Passenger } from 'src/app/Passenger';
import { CheckInServiceService } from '../check-in-service.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Flight } from 'src/app/Flight';
import { MatPaginator } from '@angular/material/paginator';
import { SeatChangePopupComponent } from '../seat-change-popup/seat-change-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { seatsBook } from 'src/app/SeatLayout';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-flight-passengers',
  templateUrl: './flight-passengers.component.html',
  // styleUrls: ['./flight-passengers.component.css']
  styleUrls:['./flight-passengers.scss']
})
export class FlightPassengersComponent implements OnInit {
  passengers: Passenger[] = [];
  displayedColumns: string[] = ['passengerId', 'name', 'age', 'seatNo', 'category', 'gender', 'Checked-In', 'Action'];
  ELEMENT_DATA: Passenger[] = [];
  dataSource: any;
  flight: Flight;
  noOfPassengers: number;
  dialogData: Passenger;
  result: any;
  selectedSeatChange: number;
  checked : string[] =['Checked-In' ,'Not Checked-In','None']
  categories: string[] = ['normal', 'infant', 'wheel chair','infant + wheel chair', 'none'];
  filteredPassengers: Passenger[] = [];
  remainingSeats :number;
  rows = new Array();
  options: FormGroup;
  filterCategory = new FormControl();
  filterStatus=new FormControl();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  confirm: any;
  checkedSeat: String[]=[];
  totalSeat = ['1A', '1B', '1C', '1D', '1E', '1F', '2A', '2B', '2C', '2D', '2E', '2F',
  '3A', '3B', '3C', '3D', '3E', '3F',
  '4A', '4B', '4C', '4D', '4E', '4F',
  '5A', '5B', '5C', '5D', '5E', '5F',
  '6A', '6B', '6C', '6D', '6E', '6F',
  '7A', '7B', '7C', '7D', '7E', '7F',
  '8A', '8B', '8C', '8D', '8E', '8F',
  '9A', '9B', '9C', '9D', '9E', '9F'];
  remainingSeatList : String[]=[]

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(fb:FormBuilder, private checkInService: CheckInServiceService, private router: Router, public dialog: MatDialog) { 
    this.options = fb.group({
      filterCategory: this.filterCategory,
      filterStatus:this.filterStatus
    });
  }
  seatsLayout: seatsBook = {
    totalRows: 9,
    seatsPerRow: 6,
    seatNaming: 'rowType',
    booked: this.checkedSeat
  }
  ngOnInit(): void {
   
    this.flight = JSON.parse(localStorage['flight']);
    this.checkInService.getFlightByFlightId(this.flight.flightId).subscribe((data: Flight) => {
      console.log('in flight passengers');
      console.log(data);
      this.flight = data;
      console.log(this.flight);
      console.log('here');
      this.noOfPassengers = this.flight.passengers.length;
      console.log(this.noOfPassengers);
      this.passengers = this.flight.passengers;
      this.ELEMENT_DATA = this.passengers;
      this.dataSource = new MatTableDataSource<Passenger>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
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

  }
  // changeChecked(value){
  //   console.log(value);
  //   if (value === "Checked-In")
  //     this.filteredPassengers = this.passengers.filter((item) => (item.checkinStatus === true));
  //   else if (value === "Not Checked-In")
  //     this.filteredPassengers = this.passengers.filter((item) => (item.checkinStatus === false));
  //   else if (value === 'None')
  //     this.filteredPassengers = this.passengers.filter((item) => (item));

  //   console.log(this.filteredPassengers);
  //   this.dataSource = this.filteredPassengers;
  //   this.noOfPassengers=this.filteredPassengers.length;
    
  // }

  // changeClient(value) {
  //   console.log(value);
  //   if (value === "normal")
  //     this.filteredPassengers = this.passengers.filter((item) => (item.category === 'normal'));
  //   else if (value === "infant")
  //     this.filteredPassengers = this.passengers.filter((item) => (item.category === 'infant'));
  //   else if (value == "wheel chair")
  //     this.filteredPassengers = this.passengers.filter((item) => (item.category === 'wheel chair'));
  //   else if(value== "infant + wheel chair")
  //     this.filteredPassengers = this.passengers.filter((item) => (item.category=== 'infant + wheel chair'))
  //   else if (value == 'none')
  //     this.filteredPassengers = this.passengers.filter((item) => (item));

  //   console.log(this.filteredPassengers);
  //   this.dataSource = this.filteredPassengers;
  //   this.noOfPassengers=this.filteredPassengers.length;

  // }

  doAction(){
    console.log(this.options.value.filterCategory);
    console.log(this.options.value.filterStatus);
    let category=this.options.value.filterCategory;
    let status=this.options.value.filterStatus;
    if(category=="normal" && (status==null || status == "None"))
      this.filteredPassengers = this.passengers.filter((item) => (item.category === 'normal'));
    else if(category==="infant" && (status==null || status == "None")) 
      this.filteredPassengers = this.passengers.filter((item) => (item.category === 'infant'));
    else if( category === "wheel chair"   && (status==null || status == "None"))
      this.filteredPassengers = this.passengers.filter((item) => (item.category === 'wheel chair'));
    else if(category ==="infant + wheel chair"  && (status==null || status == "None") )
      this.filteredPassengers = this.passengers.filter((item) => (item.category=== 'infant + wheel chair'))
    else if (category === "normal" && status ==="Checked-In")
     this.filteredPassengers = this.passengers.filter((item) => (item.category=== 'normal' && item.checkinStatus==true))
     else if (category === "normal" && status ==="Not Checked-In")
     this.filteredPassengers = this.passengers.filter((item) => (item.category=== 'normal' && item.checkinStatus==false))
     else if (category === "wheel chair" && status ==="Checked-In")
     this.filteredPassengers = this.passengers.filter((item) => (item.category=== 'wheel chair' && item.checkinStatus==true))
     else if (category === "wheel chair" && status ==="Not Checked-In")
     this.filteredPassengers = this.passengers.filter((item) => (item.category=== 'wheel chair' && item.checkinStatus==false))
     else if (category === "infant" && status ==="Checked-In")
     this.filteredPassengers = this.passengers.filter((item) => (item.category=== 'infant' && item.checkinStatus==true))
     else if (category === "infant" && status ==="Not Checked-In")
     this.filteredPassengers = this.passengers.filter((item) => (item.category=== 'infant' && item.checkinStatus==false))
     else if (category === "infant + wheel chair" && status ==="Checked-In")
     this.filteredPassengers = this.passengers.filter((item) => (item.category=== 'infant + wheel chair' && item.checkinStatus==true))
     else if (category === "infant + wheel chair" && status ==="Not Checked-In")
     this.filteredPassengers = this.passengers.filter((item) => (item.category=== 'infant + wheel chair' && item.checkinStatus==false))
     else if((category === null || category === "none") && status ==="Checked-In")
     this.filteredPassengers = this.passengers.filter((item) => (item.checkinStatus === true));
     else if((category === null || category === "none") && status ==="Not Checked-In")
     this.filteredPassengers = this.passengers.filter((item) => (item.checkinStatus === false));
    else
      this.filteredPassengers = this.passengers.filter((item) => (item));
     
     
      console.log(this.filteredPassengers);
      this.dataSource = this.filteredPassengers;
      this.noOfPassengers=this.filteredPassengers.length;
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
  }
  openDialog(action: string, obj: any) {
    console.log(obj);
    this.dialogData = obj;
    let selectedSeat=this.dialogData.seatNo;
    this.remainingSeatList=this.totalSeat;
    for(let i=0;i<this.checkedSeat.length;i++){
      this.remainingSeatList=this.remainingSeatList.filter(item =>item !=this.checkedSeat[i]);
    }
    console.log(this.remainingSeatList);
    // this.selectedSeatChange = this.dialogData.seatNo;
    console.log(selectedSeat);
    const dialogRef = this.dialog.open(SeatChangePopupComponent, {
      maxWidth: "800px",
      data: this.remainingSeatList,
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      console.log('after change');
      console.log(dialogResult);
      console.log('before change');
      console.log(this.dialogData);
    if(this.result.data!=null){
      for (let i = 0; i < this.passengers.length; i++) {
        if(this.passengers[i].seatNo==selectedSeat){
          this.passengers[i].seatNo=this.result.data;
          this.checkedSeat=this.checkedSeat.filter(item=>item != selectedSeat);
          this.remainingSeatList=this.remainingSeatList.filter(item=>item !=this.result.data);
          this.checkedSeat.push(this.result.data);
          console.log(this.checkedSeat);
          this.remainingSeatList.push(selectedSeat);
          console.log(this.remainingSeatList);
          this.flight.passengers = this.passengers;
            this.checkInService.updatePassengerStatus(this.flight.flightId, this.flight).subscribe(
              data => {
                console.log('seat updated in backend');
                console.log(data);
                localStorage['flight'] = JSON.stringify(data);
                //location.reload();
      
              }
            )
          
          break;
        }

      }
    }
     });
  };


  seatAction(seat){
    console.log(seat);
    for(let i=0;i<this.flight.passengers.length;i++){
      if(this.flight.passengers[i].seatNo==seat){
        if(this.flight.passengers[i].checkinStatus==true){
          this.flight.passengers[i].checkinStatus=false;
          this.checkedSeat=this.checkedSeat.filter(item=> item != seat);
        }
        else if(this.flight.passengers[i].checkinStatus==false){
          this.flight.passengers[i].checkinStatus=true;
          this.checkedSeat.push(seat);
          console.log(this.checkedSeat);
        }
          this.checkInService.updatePassengerStatus(this.flight.flightId, this.flight).subscribe(
          data => {
          console.log('in update status');
          console.log(data);
      }
    )
 
        break;
      }

    }
  }
  isWheelChair(data:String):any {
    let passengersCheck=this.flight.passengers;
    let response;
    for(let i=0;i<passengersCheck.length;i++){
      if(passengersCheck[i].seatNo==data  && passengersCheck[i].checkinStatus==true && passengersCheck[i].category=="wheel chair"){
        response=true;
      }
    }
    return response;
  }
  isInfant(data:String):any {
    let passengersCheck=this.flight.passengers;
    let response;
    for(let i=0;i<passengersCheck.length;i++){
      if(passengersCheck[i].seatNo==data  && passengersCheck[i].checkinStatus==true && passengersCheck[i].category=="infant"){
        response=true;

      }
    }
    return response;
  }
  isNormal(data:String):any {
    let passengersCheck=this.flight.passengers;
    let response;
    for(let i=0;i<passengersCheck.length;i++){
      if(passengersCheck[i].seatNo==data && passengersCheck[i].checkinStatus==true && passengersCheck[i].category=="normal"){
        response=true;
      }
    }
    return response;
  }
  isExtra(data:String):any {
    let passengersCheck=this.flight.passengers;
    let response;
    for(let i=0;i<passengersCheck.length;i++){
      if(passengersCheck[i].seatNo==data && passengersCheck[i].checkinStatus==true && passengersCheck[i].category=="infant + wheel chair"){
        response=true;
      }
    }
    return response;
  }
}
