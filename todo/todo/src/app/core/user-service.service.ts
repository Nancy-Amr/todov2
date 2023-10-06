import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { 
    this.getJSON().subscribe(data => {
      console.log(data);
  });
  }


  getJsonData(){
    return this.http.get('http://localhost:4000/users')
  }
  public getJSON(): Observable<any> {
    return this.http.get("http://localhost:4000/users");
}
}
