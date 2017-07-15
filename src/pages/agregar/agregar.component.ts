import { Component, OnInit } from '@angular/core';
import {ListaItem} from '../../app/clases/lista_item';
import {Lista} from '../../app/clases/listas';
import {ListaDeseosService} from '../../app/services/lista_deseos.service';
import {NavController} from 'ionic-angular';
import {PendientesComponent} from '../pendientes/pendientes.component';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista: string = '';
  nombreItem: string = '';
  listaTareas: ListaItem[] = [];
  constructor(private _listaDeseosService: ListaDeseosService,
    private _navController: NavController,
    public alertCtrl: AlertController) { }

  ngOnInit() { }

  agregarItem() {
    console.log("se debe agregar item a la lista actual: " + this.nombreItem);
    if (this.nombreItem) {
      this.listaTareas.push(new ListaItem(this.nombreItem));
      this.nombreItem = '';
    } else {
      this.showAlert("Aviso", "Se debe de ingresar nombre de la tarea");
    }
  }

  guardarLista() {
    console.log("se debe guardar la lista actual");
    if (this.nombreLista.length == 0) {
      this.showAlert("Aviso", "Se debe de ingresar nombre de la Lista");
    } else {
      let listaTemp = new Lista(this.nombreLista);
      listaTemp.items = this.listaTareas;
      this._listaDeseosService.agregarLista(listaTemp);
      this._navController.pop();
    }
  }

  eliminarTarea(indice) {
    console.log("se debe eliminar de la lista actual el item " + indice);
    this.listaTareas.splice(indice, 1);
  }

  showAlert(header: string, content: string) {
    let alert = this.alertCtrl.create({
      title: header,
      subTitle: content,
      buttons: ['OK']
    });
    alert.present();
  }
}
