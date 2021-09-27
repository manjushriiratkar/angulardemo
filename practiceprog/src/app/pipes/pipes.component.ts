import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PIPESComponent implements OnInit {
employee: any[];
  constructor() {
    this.employee=[{
      employee_id:1,employee_name:'Sammy',salary:50000,Designation:'Manager',yrofexp:10
    },{employee_id:2,employee_name:'Radha',salary:25000,Designation:'executive',yrofexp:5}]
   }

  ngOnInit(): void {
  }

}
