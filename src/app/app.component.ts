import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AirFlight';
  rest(){
    if(localStorage.getItem("role")==null){
      return false;
    }else{
      return true;
    }
  }

}
