import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCovidService {

  constructor(private http: HttpClient) {}



  getGeneralCase() {
    return this.http.get('https://coronavirus-19-api.herokuapp.com/all');
  }

}
