import { Component, OnInit } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  constructor() { }

  public gridData: any[] = products;

  ngOnInit() {
  }



}
