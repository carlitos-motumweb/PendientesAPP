import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {
    idx:number;
    lista:any;
  constructor(private _navController: NavController, private _navParams: NavParams) {
    console.log(_navParams);
    this.idx = this._navParams.get('indice');
    this.lista = this._navParams.get('lista');
  }

  ngOnInit() { }
}
