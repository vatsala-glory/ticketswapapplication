import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = '/api/v1/'

  constructor( private http: HttpClient) { }

  fetchData(data) {
    return this.http.get(this.url + data);
  }
}
