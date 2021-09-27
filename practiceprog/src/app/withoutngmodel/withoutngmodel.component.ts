import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-withoutngmodel',
  templateUrl: './withoutngmodel.component.html',
  styleUrls: ['./withoutngmodel.component.css']
})
export class WithoutngmodelComponent implements OnInit {
  userName = "Bhushan";

  constructor() { }

  ngOnInit(): void {
  }

}
