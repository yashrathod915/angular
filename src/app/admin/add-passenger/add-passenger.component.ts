import { Component, OnInit, Inject } from '@angular/core';
import { Passenger } from 'src/app/Passenger';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { InflightServiceService } from 'src/app/air-line-staff/in-flight/inflight-service.service';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit {
  options: FormGroup;
  passengerName = new FormControl();
  age = new FormControl();
  Category = new FormControl();
  ancillaryService=new FormControl();
  foodItemForm=new FormControl();
  storeItemForm=new FormControl();
  gender=new FormControl();
  passport=new FormControl();
  address=new FormControl();
  dob= new FormControl();
  seatNo=new FormControl();
  passenger: Passenger;
  remainingSeatList:String[]=[]
  categories: string[] = ['normal', 'infant', 'wheel chair','infant + wheel chair'];
  services:any;
  foodItem:any;
  shopItem:any;
  genders:string[]=['Male','Female'];
  constructor(fb: FormBuilder, private inFlightService: InflightServiceService,public dialogRef: MatDialogRef<AddPassengerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // Update view with given values
    this.remainingSeatList = data;
    console.log('in action');
    console.log(data);
    this.options = fb.group({
      passengername: this.passengerName,
      age: this.age,
      category: this.Category,
      ancillaryService: this.ancillaryService,
      gender:this.gender,
      passport:this.passport,
      address:this.address,
      dob: this.dob,
      foodItemForm:this.foodItemForm,
      storeItemForm:this.storeItemForm,
      seatNo :this.seatNo
    });
  }
  
  ngOnInit(): void {
    this.services=this.inFlightService.selectedFlight.flightAncillaryService;
    this.services=this.services.split(',');
    this.foodItem=this.inFlightService.selectedFlight.foodItems;
    this.foodItem=this.foodItem.split(',');
    this.shopItem=this.inFlightService.selectedFlight.onlineShopitems;
    this.shopItem=this.shopItem.split(',');
  }

  convertDob(str) {
    var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("/");
   }
  doAction() {
    this.passenger = {} as Passenger;
     console.log(this.options);
    // console.log(this.options.value.passengername);
    // console.log(this.options.value.age);
    // console.log(this.options.value.category);
    // console.log(this.options.value.ancillaryService);
    // console.log(this.options.value.gender);
    // console.log(this.options.value.passport);
    // console.log(this.options.value.address);
    // console.log(this.options.value.dob);
    // console.log(this.options.value.seatNo);
 
    this.passenger.name=this.options.value.passengername;
    this.passenger.age=this.options.value.age;
    this.passenger.category=this.options.value.category;
    this.passenger.ancillaryService=this.options.value.ancillaryService;
    this.passenger.gender=this.options.value.gender;
    this.passenger.passport=this.options.value.passport;
    this.passenger.address=this.options.value.address;
    this.passenger.inflightshop=this.options.value.storeItemForm;
    this.passenger.mealsList=this.options.value.foodItemForm;
    this.passenger.checkinStatus=false;
    if(this.options.value.dob==null){
      this.passenger.dob=null;
    }
    else{
      this.passenger.dob=this.convertDob(this.options.value.dob);
    }
    console.log(this.passenger.dob);
    
    if(this.passenger.category=='normal'){
      this.passenger.colour='grey';
    }
    else if(this.passenger.category=='infant')
    {
      this.passenger.colour='pink';
    }
    else if(this.passenger.category=='wheel chair'){
      this.passenger.colour='red';
    }
    this.passenger.passengerId=0;
    this.passenger.seatNo=this.options.value.seatNo;
    console.log(this.passenger);
    
    this.dialogRef.close({ data: this.passenger });
  
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }


}
