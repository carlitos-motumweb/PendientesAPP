import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validarVacio'
})
export class ValidarVacioPipe implements PipeTransform {
  transform(value: string, valueDefault: string): string {
      if(value){
          return value;
      }else{
          return valueDefault;
      }
  }
}
