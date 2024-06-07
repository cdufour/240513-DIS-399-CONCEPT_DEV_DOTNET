import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote/quote.component';
import { ToggleBtnComponent } from './toggle-btn/toggle-btn.component';
import { CityChoiceComponent } from './city-choice/city-choice.component';
import { CityCardComponent } from './city-card/city-card.component';
import { PassGenComponent } from './pass-gen/pass-gen.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    QuoteComponent,
    ToggleBtnComponent,
    CityChoiceComponent,
    CityCardComponent,
    PassGenComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [QuoteComponent, ToggleBtnComponent, CityChoiceComponent, PassGenComponent]
})
export class ExosModule { }
