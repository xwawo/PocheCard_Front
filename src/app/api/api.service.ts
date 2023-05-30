import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Card } from '../models/Card';
import {NgForm} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBaseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json, Access-Control-Allow-Origin'
    }),
  };


  //------------ METHOD GET -----------//

  getCards(): Observable<getApiCards> {
    return this.http.get<getApiCards>(this.apiBaseUrl+ '/card');
  }

  getCardById(id: number): Observable<getApiCards> {
    return this.http.get<getApiCards>(this.apiBaseUrl+ '/card/'+ id);
  }

  //------------ METHOD POST -----------//

  createCard(data: NgForm): Observable<NgForm> {  
    console.warn(JSON.stringify(data.value));
    return this.http.post<NgForm>(this.apiBaseUrl + '/card', data, this.httpOptions);  
  }


}

//------------ INTERFACES -----------//

export interface getApiCards {
  
  name: String;
  description: String;
  family: String;
  affinity: String;
  imgUrl: String;
  smallImgUrl: String;
  energy: number;
  hp:number;
  defense: number;
  attack: number;
  userId: number;

}
