import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-day',
  templateUrl: './get-day.component.html',
  styleUrls: ['./get-day.component.css']
})
export class GetDayComponent implements OnInit {
  private dayArr=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  private date=new Date('December 25,2020');
  public day:any;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      const date= new Date();
      this.gettingDay(this.day);
    },1000);
   this.day = this.dayArr[this.date.getDay()];
  }
  private gettingDay(day:Date){
    const days=this.date.getDay();
    //this.ampm=hours>=12?'pm':'am';
    //this.hour=hours%12;
    //this.hour=this.hour?this.hour:12;
    //this.hour= this.hour < 10 ? '0' + this.hour : this.hour;

    //const minutes = date.getMinutes();
    //this.minute= minutes< 10 ? '0' + minutes : minutes.toString();

    //const seconds = date.getSeconds();
    //this.second= seconds< 10 ? '0' + seconds : seconds.toString();
  
  }
  }

//}
