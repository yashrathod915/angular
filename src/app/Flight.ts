import { Passenger} from '../app/Passenger';

export class Flight{
    flightId: number
    flightName : string
    departurePlace : string
    arrivalPlace : string
    departureTime : string
    arrivalTime : string
    onlineShopitems: String[]
    foodItems: String[]
    flightAncillaryService : String[]
    passengers : Passenger[]
  
}