import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:'<app-clock></app-clock><app-calculator></app-calculator><app-practiceprogram></app-practiceprogram><app-get-day></app-get-day><app-firstapp></app-firstapp>',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isShowMore=true;
  showText(){
  this.isShowMore=!this.isShowMore
  title='Tic-Tac-Toe';
  constructor(privatetoastr:ToastService){}
  winMsg:string="";
  isCross=false;
  itemArray.string[]=new Array(9).fill("empty");

  handleClick(itemNumber:9){
    if(this.winMsg){
      return this.toastr.success(this.winMsg)
    }
    if(this.itemArray[itemNumber]==='empty'){
      this.itemArray[itemNumber]=this.isCross ? 'cross' : 'circle';
      this.isCross=!this.isCross;
    }
    else{
      return this.toastr..info("Already Filled")
    }
    this.checkWinner();
  }
  reloadGame=()=>{
    this.winMsg="";
    this.isCross=false;
    this.itemArray=new Array(9).fill("empty");
  }
  checkWinner=()=>{if(
    this.itemArray[0]== this.itemArray[1]&&
    this.itemArrat[0]===this.itemArray[2]&&
    this.itemArray[0]!=='empty'
  ){
    this.winMsg='${this.itemArray[0]} won';

  else if(this.itemArray[3]!=='empty'&&
  this.itemArray[3]===this.itemAray[4] &&
  this/otemArray[4]===this.itemArray[5]
  )
  {
    this.winMsg
  }
}
}
