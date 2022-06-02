import { Component } from '@angular/core';
import { UtilityService } from './utility.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1';
  uName:string="";
  constructor(private utility:UtilityService){
    this.utility.userName.subscribe(res=>{
      this.uName=res;
    })
  }
}
