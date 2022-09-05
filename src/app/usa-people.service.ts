import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsaPeopleService {

  constructor(private http:HttpClient) { }
  getPeople():Observable<any>{
    return this.http.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
  }

}
