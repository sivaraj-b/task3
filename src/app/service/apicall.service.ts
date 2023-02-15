import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiData } from '../api-data';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }

  getData() : Observable<ApiData[]> {
    return this.http.get<ApiData[]>('https://jsonplaceholder.typicode.com/todos');
  }

}
