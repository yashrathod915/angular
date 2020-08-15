import { Component, OnInit, Inject } from '@angular/core';
import { Passenger } from 'src/app/Passenger';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { InflightServiceService } from '../inflight-service.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {
  local_data: any;
  options: FormGroup;

  services = new FormControl();
  servicesList : any;

  passenger: Passenger;
  constructor(fb: FormBuilder,private inFlightService: InflightServiceService,public dialogRef: MatDialogRef<ActionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // Update view with given values
    this.passenger = data;
    console.log('in action');
    console.log(data);
    this.options = fb.group({
      specialmeals: this.services,
    });
  }
  ngOnInit(): void {
    this.servicesList=this.inFlightService.selectedFlight.flightAncillaryService;
     this.servicesList=this.servicesList.split(',');
     console.log(this.servicesList);
     
  }
  doAction() {
    console.log(this.options.value.services);
    
    this.dialogRef.close({ data: this.passenger });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
