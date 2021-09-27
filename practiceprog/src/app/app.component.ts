import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  
  template:'<app-dept></app-dept><app-withoutngmodel></app-withoutngmodel><app-cssclass></app-cssclass><app-directicedemo></app-directicedemo>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practiceprog';
  //fullName:string="Welcome to AngularJs";
}
