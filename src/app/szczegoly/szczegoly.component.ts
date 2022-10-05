import { Component, OnInit, Input } from '@angular/core';
import { Planszowka } from 'src/planszowka';

@Component({
  selector: 'app-szczegoly',
  templateUrl: './szczegoly.component.html',
  styleUrls: ['./szczegoly.component.css']
})
export class SzczegolyComponent implements OnInit {

  constructor() { }
  @Input() planszowka!:Planszowka;
  ngOnInit(): void {
  }
zagraj():void{
  this.planszowka.liczbaPartii++;
}
}
