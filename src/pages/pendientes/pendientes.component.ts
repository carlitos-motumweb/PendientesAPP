import { Component, OnInit } from '@angular/core';
import {ListaDeseosService} from '../../app/services/lista_deseos.service';
import {NavController} from 'ionic-angular';
import {AgregarComponent} from '../agregar/agregar.component';
import {DetalleComponent} from '../detalle/detalle.component';
import {ListaItem} from '../../app/clases/lista_item';
import {Lista} from '../../app/clases/listas';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html',
})
export class PendientesComponent implements OnInit {
  constructor(private _listaDeseosService: ListaDeseosService,
  private _navController: NavController) {  }

  ngOnInit() {}

  agregarLista(){
      this._navController.push( AgregarComponent);
  }

  verDetalle(lista:Lista, indice){
      console.log("lista seleccionada: " + lista);
      console.log('Redireccionando...');
      this._navController.push( DetalleComponent, {lista,indice});
  }
}
