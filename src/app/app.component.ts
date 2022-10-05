import { Component } from '@angular/core';
import { Planszowka } from 'src/planszowka';
import { PLANSZOWKI } from 'src/planszowki';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planszowki';
  wybranaPlanszowka!:Planszowka;
  wybranePlanszowki!:Planszowka[];
  liczbaGraczy:number = 0;
  /*
  planszowki:string[] = [
      "szachy","spadające małpki", "terraformacja Marsa", "Splendor"
  ]
  */
 planszowki:Planszowka[] = PLANSZOWKI;
 pokaz():void{
  this.wybranePlanszowki=[];
  this.planszowki.forEach(element => {
    if(element.minLG<=this.liczbaGraczy && element.maxLG>=this.liczbaGraczy)
    this.wybranePlanszowki.push(element);

  });

 }
  wybierz(jakasPlanszowka:Planszowka){
    this.wybranaPlanszowka = jakasPlanszowka;
  }
}
