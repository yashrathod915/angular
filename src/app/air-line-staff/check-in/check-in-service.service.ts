import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Flight } from 'src/app/Flight';
import { Passenger } from 'src/app/Passenger';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CheckInServiceService {
  value(arg0: string, arg1: any) {
    throw new Error("Method not implemented.");
  }
  selectedFlight:Flight;

  constructor(private httpClient:HttpClient) { }

  // getAllPassengers(){
  //   return this.httpClient.get("http://localhost:3000/passengers");
  // }
  // updatePassenger(id:number,passenger:any):any{
  //   return this.httpClient.put("http://localhost:3000/passengers/"+id,passenger);
  // }
  getAllFlights():any{
    return this.httpClient.get("http://localhost:3000/flights");
  }
  getFlightByFlightId(id:number):any{
    return this.httpClient.get("http://localhost:3000/flights/"+id);
    }
  updatePassengerStatus(flightId:number,flight:Flight){
    return this.httpClient.put("http://localhost:3000/flights/"+flightId,flight);
  }
}
