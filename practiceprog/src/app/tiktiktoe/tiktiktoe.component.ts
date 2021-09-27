import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiktiktoe',
  template:'<p>{{rando}}</p>',
  templateUrl: './tiktiktoe.component.html',
  styles:[],
  styleUrls: ['./tiktiktoe.component.css']
})
export class TiktiktoeComponent implements OnInit {
rando= Math.random();
  constructor() { }

  ngOnInit(): void {
  }

}
