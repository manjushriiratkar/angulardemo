import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppMsgComponent } from './msg.component';
import { AppChkComponent } from './chk.component';
import { ClockComponent } from './clock/clock.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { GetDayComponent } from './get-day/get-day.component';
import { FirstappComponent } from './firstapp/firstapp.component';
import { SecondappComponent } from './secondapp/secondapp.component';
import { EmployeeComponent } from './employee/employee.component';
import { PracticeprogramComponent } from './practiceprogram/practiceprogram.component';


@NgModule({
  declarations: [
    AppComponent,AppMsgComponent,AppChkComponent, ClockComponent,  CalculatorComponent, GetDayComponent, FirstappComponent, SecondappComponent, EmployeeComponent, PracticeprogramComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
