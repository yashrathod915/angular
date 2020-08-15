import { Component, OnInit,Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Passenger } from 'src/app/Passenger';
import { InflightServiceService } from '../inflight-service.service';

@Component({
  selector: 'app-inflight-services',
  templateUrl: './inflight-services.component.html',
  styleUrls: ['./inflight-services.component.css']
})
export class InflightServicesComponent implements OnInit {

  passenger : Passenger;
  options: FormGroup;
  shopItems: any;
  inflightService = new FormControl();
  constructor(fb: FormBuilder,private inFlightService: InflightServiceService, public dialogRef: MatDialogRef<InflightServicesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // Update view with given values
    this.passenger = data;
    console.log('in action');
    console.log(data);
    this.options = fb.group({
      inflightservice: this.inflightService
    });
  }

  ngOnInit(): void {
      //this.inFlightServiceStatus=this.passenger.inflightshop;
      console.log(this.inFlightService.selectedFlight.onlineShopitems);
      
    this.shopItems=this.inFlightService.selectedFlight.onlineShopitems;
    this.shopItems=this.shopItems.split(',');
  }


  doAction() {
    this.dialogRef.close({ data: this.passenger });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }
}
