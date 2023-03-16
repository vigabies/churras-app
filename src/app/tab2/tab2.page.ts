import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  //declarando as variaveis
  pontoT1 = 0;
  pontoT2 = 0;
  valendo = 1;
  partida1 = 0;
  partida2 = 0;

  constructor() { }

  changeValue(numero: number) {
    this.valendo = numero;
  }

  addPonto1() {
    this.pontoT1 += this.valendo
    this.valendo = 1

    if(this.pontoT1 >= 12){
      this.partida1 += 1
      this.pontoT1 = 0
      this.pontoT2 = 0
    }
  }

  subPonto1() {
    this.pontoT1 -= this.valendo
    this.valendo = 1
  }

  addPonto2(){
    this.pontoT2 += this.valendo
    this.valendo = 1

    if(this.pontoT2 >= 12){
      this.partida2 += 1
      this.pontoT1 = 0
      this.pontoT2 = 0
    }
  }

  subPonto2(){
    this.pontoT2 -= this.valendo
    this.valendo = 1
  }

  clean(){
    this.pontoT1 = 0;
    this.pontoT2 = 0;
    this.valendo = 1;
    this.partida1 = 0;
    this.partida2 = 0;
  }


}
