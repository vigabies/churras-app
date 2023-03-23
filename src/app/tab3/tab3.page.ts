import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  size = 0;
  dado = "assets/dado.png";
  dadoGif = "assets/dadoGif.webp";
  value = 0; //valor dado

  constructor() {}

}
