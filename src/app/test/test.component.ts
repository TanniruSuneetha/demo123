import { UtilityService } from './../utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private utility:UtilityService) { }

  ngOnInit(): void {
    this.state=this.utility.state();
  }
  state:any=[];
  city:any=[];

  onSelect(state:Event){
    const idValue=(<HTMLSelectElement>state.target).value;
    console.log("event",(<HTMLSelectElement>state.target).value);
    // this.city=this.utility.city();
    // console.log("city",this.city);
    this.city=this.utility.city().filter(e=>e.id===Number(idValue));
  }
}
