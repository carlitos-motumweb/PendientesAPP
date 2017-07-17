import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../clases/listas';

@Pipe({
  name: 'verPorEstado',
  pure: false
})
export class VerPorEstado implements PipeTransform {
  transform(listas: Lista[], estado: boolean): Lista[] {
      let listaRespuesta:Lista[] = [];
      for (let lista of listas) {
          if(lista.terminada == estado){
              listaRespuesta.push(lista);
          }
      }
    return listaRespuesta;
  }
}
