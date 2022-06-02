import { UtilityService } from './../utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  uName:string="";
  constructor(private newUtility:UtilityService) {
    this.newUtility.userName.subscribe(res=>{
      this.uName=res;
    })
   }
  //  getDetails($event:any){
  //    this.newUtility.userName.next($event);
  //  }
  ngOnInit(): void {
  }

}
