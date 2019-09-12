import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  private url = '/api/v1/'

  constructor( private http: HttpClient) { }

  fetchData(data) {
    this.http.get(this.url + data)
    .subscribe( data =>{
      console.log('data from api', data);
    })

  }
}
