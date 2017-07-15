import { Injectable } from '@angular/core';
import {Lista} from '../clases/listas';
import {ListaItem} from '../clases/lista_item';


@Injectable()
export class ListaDeseosService {
  listas: Lista[] = [];

  constructor() {
    // let lista1: Lista;
    // let lista2: Lista;
    // let itemsCompras: ListaItem[] = [];
    // let itemsLibros: ListaItem[] = [];
    // itemsCompras.push(new ListaItem("colchon cama"));
    // itemsCompras.push(new ListaItem("comedor"));
    // itemsCompras.push(new ListaItem("sala"));
    // itemsLibros.push(new ListaItem("El evangelio segun jesucristro"));
    // itemsLibros.push(new ListaItem("El marciano"));
    // itemsLibros.push(new ListaItem("Cien años de soledad"));
    // lista1 = new Lista("Compras");
    // lista1.items = itemsCompras;
    // lista2 = new Lista("Libros por leer");
    // lista2.items = itemsLibros;
    // this.listas.push(lista1);
    // this.listas.push(lista2);
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

}
