import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {IMensagem} from '../modelo/IMensagem';

@Injectable({
  providedIn: 'root'
})
export class MensagemConsoleService extends IMensagem {

  constructor(private snackBar: MatSnackBar) {
    super();
  }

  info(mensagem: string): void {
    console.log(mensagem);
  }

  erro(mensagem: string) {
    console.log(mensagem);
  }

  sucesso(mensagem: string): void {
    console.log(mensagem);
  }

}
