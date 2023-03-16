import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  //criando as variaveis
  valor = 1;

  botao1 = 1;
  botao2 = 3;
  botao3 = 6;
  botao4 = 9;
  botao5 = 12;

  pontoT1 = 0;
  pontoT2 = 0;

  state = "default";

  constructor() {}

  //adicionando os valores
  botaoAdd1() {
    this.valor = this.botao1;
  }

  botaoAdd2() {
    this.valor = this.botao2;
  }

  botaoAdd3() {
    this.valor = this.botao3;
  }

  botaoAdd4() {
    this.valor = this.botao4;
  }

  botaoAdd5() {
    this.valor = this.botao5;
  }
}
