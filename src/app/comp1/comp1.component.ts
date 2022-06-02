import { UtilityService } from './../utility.service';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  uName:string="";
  constructor(private newUtility:UtilityService) { 
    this.newUtility.userName.subscribe(res=>{
      this.uName=res;
    })
  }
  
  ngOnInit(): void {
  }
  getDetails($event:any){
    this.newUtility.userName.next($event);
  }
}