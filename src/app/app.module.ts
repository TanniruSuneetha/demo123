import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { PopulationApiComponent } from './population-api/population-api.component';
import { HttpClientModule } from '@angular/common/http';
import { UsaPeopleService } from './usa-people.service';
@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    TestComponent,
    Test2Component,
    PopulationApiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsaPeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
