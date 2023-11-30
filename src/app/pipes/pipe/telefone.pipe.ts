import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(valor2: string): string {

    //Removendo 0, caso seja o primeiro dígito
    let valor3 = valor2;
    let valor = valor3.startsWith('0') ? valor3.slice(1) : valor3;

    // 9-9875-5621
    if (valor.length == 8) {
      return valor.substring(0, 4)
        + '-' + valor.substring(4);
    }

    // 83-9-9875-5621
    if (valor.length == 10) {
      return valor.substring(0, 2)
        + '-' + valor.substring(2, 6)
        + '-' + valor.substring(6);
    }

    return valor;

  }

}
