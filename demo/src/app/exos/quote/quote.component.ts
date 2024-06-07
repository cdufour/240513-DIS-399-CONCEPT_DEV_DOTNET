import { Component } from '@angular/core';
import { Quote } from '../quote';
import { randInt } from '../tools';

const ANIM_SPEED = 1000;

@Component({
  selector: 'exos-quote',
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.css'
})
export class QuoteComponent {
  quotes: Quote[] = [
    { text: "La femme est l'avenir de l'homme", author: "Aragon" },
    { text: "The world is yours", author: "Toni Montana" },
    { text: "Ad Astra per Aspera", author: "Inconnu" },
    { text: "Tra il dire e il fare c'è di mezzo il mare", author: "Chris" },
  ];
  selectedQuote: Quote = this.quotes[0];
  quoteIndex: number = 0;
  intervalId: any;

  constructor() {
    console.log("*** quote compoment: constructor ***");
    //this.sequencialAnim();
    this.randomAnim();
  }

  ngOnInit() {
    console.log("*** quote compoment: ngOnInit ***");
  }

  ngOnDestroy() {
    console.log("*** quote compoment: ngOnDestroy ***");
    // destruction de l'inervalle lorsque le composant
    // est détruit (retiré du DOM)
    clearInterval(this.intervalId);
  }

  sequencialAnim() {
    setInterval(() => {
      this.quoteIndex++;

      // on vérifie qu'on reste dans les bornes du tableau
      if (this.quoteIndex >= this.quotes.length) {
        console.log("this.quoteIndex => ", this.quoteIndex);
        this.quoteIndex = 0;
      }
          
      this.selectedQuote = this.quotes[this.quoteIndex];
    }, ANIM_SPEED);
  }

  randomAnim() {
    this.intervalId = setInterval(() => {
      this.selectedQuote = 
        this.quotes[randInt(this.quotes.length)];
        console.log("this.quoteIndex => ", this.quoteIndex);
    }, ANIM_SPEED);
  }
}
