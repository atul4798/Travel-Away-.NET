import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Ibooking } from '../Interfaces/Ibooking';
@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {
  
 
  constructor(private http: HttpClient) { }

  storeBook(email: string, cno: string, address: string, Travel: string, Children: string, Adults: string): Observable<boolean> {
    var userobj: Ibooking;

    userobj = { email: email, contactNumber: cno, residentialAddress: address, dateofTravel: Travel, numberofAdults: Number(Adults), numberofChildren: Number(Children) }

    return this.http.post<boolean>("https://localhost:44322/travelaway", userobj).pipe(catchError(this.errorHandler));
   
  }
  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error || "Server Error");
  }
}
