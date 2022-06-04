import {Component} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-ex-forms',
  template: `
    <div class="wisky-container">
      <form [formGroup]="wisky">
        <label for="brand">銘柄</label>
        <input formControlName="brand">

        <label for="country">生産国</label>
        <select formControlName="country" type="select">
          <option *ngFor="let country of countryOptions" [value]="country.value">
            {{ country.name }}
          </option>
        </select>

        <label for="price">価格</label>
        <input formControlName="price" type="number">

        <label for="price">飲み方</label>
        <select formControlName="howToDrink" type="select" multiple>
          <option *ngFor="let how of howToDrinkOptions" [value]="how">
            {{ how }}
          </option>
        </select>
      </form>
    </div>
  `,
  styleUrls: ['./ex-forms.component.scss']
})
export class ExFormsComponent {

  wisky = new FormGroup({
    brand: new FormControl('山崎'),
    country: new FormControl(''),
    price: new FormControl(0),
    howToDrink: new FormControl([])
  });

  countryOptions: CountryOptions[] = [
    {
      value: 'japanese',
      name: '日本',
    },
    {
      value: 'scotch',
      name: 'スコットランド',
    },
    {
      value: 'bourbon',
      name: 'アメリカ',
    },
  ];

  howToDrinkOptions = [
    'スレート',
    'ハイボール',
    'ロック',
    'トワイスアップ',
  ];

  constructor() {
    this.wisky.controls['brand'].valueChanges.subscribe(value => {
      console.log(value);
    });
    this.wisky.controls['country'].valueChanges.subscribe(value => {
      console.log(value.indexOf('t'));
    });
    this.wisky.controls['price'].valueChanges.subscribe(value => {
      console.log(value.indexOf('1'));
    });
    this.wisky.controls['howToDrink'].valueChanges.subscribe(values => {
      values.map(v => console.log(v));
    });
    this.wisky.controls['unknown'].valueChanges.subscribe(value => {
      console.log(value);
    });
  }
}

type CountryOptions = {
  value: string,
  name: string,
};



      // (values as string[]).map(v => console.log(v));
