import { Injectable } from '@angular/core';
import {Lista} from '../clases/listas';
import {ListaItem} from '../clases/lista_item';


@Injectable()
export class ListaDeseosService {
  listas: Lista[] = [];

  constructor() {
    console.log("Servicio listadeseos inicializado...");
    this.cargarData();
  }

  actualizarData(){
      localStorage.setItem("data", JSON.stringify(this.listas));
  }

  cargarData(){
      if(localStorage.getItem("data")){
          this.listas = JSON.parse(localStorage.getItem("data"));
      }
  }

  agregarLista(lista: Lista){
      this.listas.push(lista);
      this.actualizarData();
  }

  eliminarLista(indice: number){
      this.listas.splice(indice,1);
      this.actualizarData();
  }

}
