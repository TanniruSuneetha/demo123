import { UsaPeopleService } from './../usa-people.service';
import { Component, OnInit } from '@angular/core';
import { People } from '../classes/people';
@Component({
  selector: 'app-population-api',
  templateUrl: './population-api.component.html',
  styleUrls: ['./population-api.component.css']
})
export class PopulationApiComponent implements OnInit {
  peopleList!: People[];
  constructor(private usa:UsaPeopleService) { }

  ngOnInit(): void {
    this.usa.getPeople().subscribe((data)=>{
      console.log("first data",data);
      this.peopleList=data.data;
      console.log("data",data.data);
      console.log("data",typeof data.data);

    })
  }

}
