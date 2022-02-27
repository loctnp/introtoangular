import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day1-IntroToAngular';
  mydata = {
    "id":1,
    "name":"iphone x",
    "price":1000,
  }
  dataFromChild:any
  // drinks = [
  //   {"id":1,"name":"Heineken","price":19000},
  //   {"id":2,"name":"Tiger","price":17000},
  //   {"id":3,"name":"Corona","price":22000},
  //   {"id":4,"name":"333","price":15000},
  // ]
}
