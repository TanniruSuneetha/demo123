import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  userName=new Subject<string>();
  constructor() { }
  
  state(){
    return [
      { id:1,name:"telangana"},
      { id:2,name:"Andhra"},
      { id:3,name:"Maharastra"}
    ]
  }

  city(){
    return [
      { id:1,name:"HYD"},
      { id:1,name:"WGL"},
      { id:1,name:"KNR"},
      { id:2,name:"Vizag"},
      { id:2,name:"Guntur"},
      { id:2,name:"Vijayawada"},
      { id:3,name:"Mumbai"},
      { id:3,name:"Nagapur"},
      { id:3,name:"puney"},
    ]
  }
}
