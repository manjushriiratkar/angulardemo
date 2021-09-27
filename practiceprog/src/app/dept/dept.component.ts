import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dept',
  template: '<input (keyup)="onKey($event)"><p>{{values}}</p>',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent implements OnInit {
name:String="AngularJS";

classtoapply:String="italicClass boldClass colorClass";

values = '';

onKey(event: any) { // without type info
  this.values += event.target.value + ' | ';
}


  constructor() { }

  ngOnInit(): void {
  }

}
