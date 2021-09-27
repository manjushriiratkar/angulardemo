import { Component } from '@angular/core';

@Component({
  selector: 'app-msg',
  template:'<h2>Hello from msg{{name}}</h2>',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppMsgComponent {
  name='world';
 // title = 'myproject';
}
