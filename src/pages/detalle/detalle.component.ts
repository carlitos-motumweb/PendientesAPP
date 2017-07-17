import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import {Lista} from '../../app/clases/listas';
import {ListaItem} from '../../app/clases/lista_item';
import {ListaDeseosService} from '../../app/services/lista_deseos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: 'detalle.component.html',
})
export class DetalleComponent implements OnInit {
  idx: number;
  lista: Lista;
  constructor(private _navController: NavController,
    private _navParams: NavParams,
    private _listaDeseosServices: ListaDeseosService,
    public _alertCtrl: AlertController) {
    this.idx = this._navParams.get('indice');
    this.lista = this._navParams.get('lista');
  }

  ngOnInit() { }

  private marcarTarea(tarea: ListaItem) {
    tarea.completado = !tarea.completado;

    this.lista.terminada = true;

    for (let item of this.lista.items) {
        if(!item.completado){
            this.lista.terminada = false;
            break;
        }
    }
    this._listaDeseosServices.actualizarData();
  }

  private eliminarTarea() {
    let confirm = this._alertCtrl.create({
      title: this.lista.nombre,
      message: '¿Realmente deseas borrar la lista?',
      buttons: [
        'Cancelar',
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Se debe eliminar la lista seleccionada');
            this._listaDeseosServices.eliminarLista(this.idx);
            this._navController.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}
