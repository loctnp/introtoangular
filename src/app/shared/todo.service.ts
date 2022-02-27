import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { ITodo } from 'src/assets/interfaces/ITodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url : string = "https://jsonplaceholder.typicode.com/todos"
  // url2: string = "https://jsonplaceholder.typicode.com/todos?id="+"1";
  constructor(private http: HttpClient) { }

  errorHandler(error:HttpErrorResponse){
    return throwError(function(){
      return new Error(error.message);
    })
  }
  getToDoList():Observable<ITodo[]>{
    return this.http.get<ITodo[]>(this.url2)
        .pipe(
          retry(2),catchError(this.errorHandler)
        );
  }
}
