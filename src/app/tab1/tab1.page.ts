import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  animations: [
    trigger("rotatedStated", [
      state("default", style({transform: "rotateY(0)"})),
      state("rotated", style({transform: "rotateY(-360deg)"})),
      transition("rotated => default", animate("1500ms ease-out")),
      transition("default => rotated", animate("1500ms ease-in")),
    ]),
  ],
})

export class Tab1Page {
 //tudo que tiver aqui vai ser puxado com this pq é variavel global
  cara = "assets/cara.png";
  coroa = "assets/coroa.png";
  logo = "assets/logo.png";
  image = this.logo;
  info = "Clique no botão para jogar!";
  state = "default";

  constructor() {}

  jogarMoeda() {
    this.image = this.logo;
    this.info = "Girando..."
    this.state = this.state === "default" ? "rotated" : "default";

    setTimeout(()=>{
      if(Math.random() < 0.5){
        this.image = this.cara;
        this.info = "Cara!";

      } else {
        this.image = this.coroa;
        this.info = "Coroa!"
      }
    }, 1500);
  }
}
