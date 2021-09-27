import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cssclass',
  templateUrl: './cssclass.component.html',
  styleUrls: ['./cssclass.component.css']
})
export class CssclassComponent implements OnInit {
isapplay=true;
isbold:boolean=true;
isitalic:boolean=true;
isstatic :boolean=true;
fontsize:number=20;
  constructor() { }

  ngOnInit(): void {

  }
  applyChange(){
    let classes={
      boldClass:this.isbold,
      italicClass:this.isitalic,
      colorClass:this.fontsize,
        }
        return classes;
  }
  applyStyle(){
    let style={
      'font-weight':this.isbold?'bold':'normal',
      'font-style':this.isitalic?'italic':'normal',
      'font-size.px':this.fontsize,
      
    }
    return style;
  }
  
}
