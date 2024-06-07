import { Component } from '@angular/core';

@Component({
  selector: 'exos-toggle-btn',
  templateUrl: './toggle-btn.component.html',
  styleUrl: './toggle-btn.component.css'
})
export class ToggleBtnComponent {
  text: 'oui' | 'non' = 'oui';
  isOff: boolean = false;
  marginLeft: string = '0'; // marge au niveau du texte (span)
  left: string = '62px'; // positionnemet du cercle

  onClick() {
    console.log("click");
    if (this.isOff = this.text === 'oui') {
      this.text = 'non';
      this.marginLeft = '46px';
      this.left = '2px';
    } else {
      this.text = 'oui';
      this.marginLeft = '0';
      this.left = '62px';
    }
  }
}
