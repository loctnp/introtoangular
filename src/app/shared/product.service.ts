import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { IProduct } from 'src/assets/interfaces/IProduct';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IData } from 'src/assets/interfaces/IData';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url: string = "../assets/data/products.json"
  url2: string = 'https://jsonplaceholder.typicode.com/todos'
  constructor(private _http: HttpClient) { }
  
  // getDrinks(){
  //   return [
  //     {"id":1,"name":"Heineken","price":19000},
  //     {"id":2,"name":"Tiger","price":17000},
  //     {"id":3,"name":"Corona","price":22000},
  //     {"id":4,"name":"333","price":15000},
  //   ]
  // }
  handleError(error: HttpErrorResponse){
    return throwError(()=>new Error(error.message))
  }
  
  getDrinks(): Observable<IProduct[]>{
    //Simplest version
    // return this._http.get<IProduct[]>(this._url);
    
    return this._http.get<IProduct[]>(this._url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  
  }
  getData(): Observable<IData[]>{
    return this._http.get<IData[]>(this.url2).pipe(retry(2), catchError(this.handleError));
  }
}
