import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TiktiktoeComponent } from './tiktiktoe/tiktiktoe.component';
import { DeptComponent } from './dept/dept.component';
import { WithoutngmodelComponent } from './withoutngmodel/withoutngmodel.component';
import {AppComponent}       from './app.component';
import { CssclassComponent } from './cssclass/cssclass.component';
import { DirecticedemoComponent } from './directicedemo/directicedemo.component';
import { PIPESComponent } from './pipes/pipes.component';


@NgModule({
  declarations: [
    AppComponent,
    TiktiktoeComponent,
    DeptComponent,
    WithoutngmodelComponent,
    CssclassComponent,
    DirecticedemoComponent,
    PIPESComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
