import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-drinks-detail',
  templateUrl: './drinks-detail.component.html',
  styleUrls: ['./drinks-detail.component.css']
})
export class DrinksDetailComponent implements OnInit {

  
  constructor(private _service:ProductService) { }
  drinks: any
  ngOnInit(): void {
    this._service.getDrinks().subscribe(data=>this.drinks = data)
  }
}
