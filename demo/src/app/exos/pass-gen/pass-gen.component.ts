import { Component } from '@angular/core';
import { randInt, randIntInRange } from '../tools';

/*
https://www.asciitable.com/
33-47: some special chars
97-122: lower case
*/

@Component({
  selector: 'exos-pass-gen',
  templateUrl: './pass-gen.component.html',
  styleUrl: './pass-gen.component.css'
})
export class PassGenComponent {
  passlen: number = 10;
  containNumbers: boolean = true;
  containSpecialChars: boolean = false;
  pass: string = '';

  onClick() {
    let pass = [];
    for (let i=0; i<this.passlen; i++) {
      pass.push(String.fromCharCode(randIntInRange(97,122)));
    }

    if (this.containNumbers) {
      pass[randInt(this.passlen)] = randIntInRange(0,9);
    }
    
    if (this.containSpecialChars) {
      pass[randInt(this.passlen)] = String.fromCharCode(randIntInRange(33,47));
    }
    
    this.pass = pass.join('');
  }

  
}
