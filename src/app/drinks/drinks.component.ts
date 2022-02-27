import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  drinks:any
  drinkid=0
  errMsg:any
  links:any
  userid:any
  constructor(private _service: ProductService) { }

  ngOnInit(): void {
    //Simplest version
    // this._service.getDrinks().subscribe(data=>this.drinks = data)

    this._service.getDrinks().subscribe({
      next: data => this.drinks = data,
      error: err => this.errMsg = err
    })

    this._service.getData().subscribe(
      {
        next: data=>this.links = data,
        error: err => this.errMsg = err
      }
    )
  }

}
