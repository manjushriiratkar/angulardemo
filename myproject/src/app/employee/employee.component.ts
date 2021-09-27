import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  message:String="One Way binding";
  name:String;

  a:number;
  b:number;
msg:String='';
  path:String='./assets/th.jpg';
  isdisabled=false;


  constructor() {
    this.name='Nikhil';
    this.a=20;
    this.b=30;
   }

  ngOnInit(): void {
  }
getData():String{
  return "Data Binding";
}
getMessage(msg:String){
this.msg=msg;
alert(this.msg);
console.log(this.msg);
}
}
