import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Lista} from '../../app/clases/listas';
import {ListaItem} from '../../app/clases/lista_item';
import {ListaDeseosService} from '../../app/services/lista_deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {
    idx:number;
    lista:any;
  constructor(private _navController: NavController,
    private _navParams: NavParams,
    private _listaDeseosServices: ListaDeseosService) {
    console.log(_navParams);
    this.idx = this._navParams.get('indice');
    this.lista = this._navParams.get('lista');
  }

  ngOnInit() { }

  private marcarTarea(tarea: ListaItem){
    tarea.completado = !tarea.completado;
    this._listaDeseosServices.actualizarData();
  }
}
