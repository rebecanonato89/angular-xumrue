import { Component, OnInit, EventEmitter } from '@angular/core';

export interface City {
  Id: number;
  NomeCity: string;
}

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {

  constructor() { }

  static emitirIdCidade = new EventEmitter<string>();

  citys: City[] = [
    {Id: 0, NomeCity: 'Belo Horizonte'},
    {Id: 1, NomeCity: 'Lavras'},
    {Id: 2, NomeCity: 'Rio de Janeiro'}
  ];

  id: number;
  cidadeSelecionada(id: number) {
    this.id = id;
  }


  ngOnInit() {
  }

}
