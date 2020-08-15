import { Injectable } from '@angular/core';
import { Flight } from 'src/app/Flight';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InflightServiceService {
  selectedFlight: Flight;
  constructor(private httpClient:HttpClient) { }
 
  getAllFlights():any{
    return this.httpClient.get("http://localhost:3000/flights");
  }
  getFlightByFlightId(id:number){
    return this.httpClient.get("http://localhost:3000/flights/"+id);
    }
  updatePassengerStatus(flightId:number,flight:Flight){
    return this.httpClient.put("http://localhost:3000/flights/"+flightId,flight);
  }
}
