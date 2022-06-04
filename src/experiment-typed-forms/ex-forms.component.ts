import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, UntypedFormControl, UntypedFormGroup} from "@angular/forms";

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
    country: new FormControl<string>('', { nonNullable: true }),
    price: new FormControl(0, { nonNullable: true }),
    howToDrink: new FormControl([''], { nonNullable: true }),
  });

  countryOptions: CountryOption[] = [
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
      console.log(value);
    });
    this.wisky.controls['price'].valueChanges.subscribe(value => {
      console.log(value.toFixed());
    });
    this.wisky.controls['howToDrink'].valueChanges.subscribe(values => {
      values.map(v => console.log(v));
    });
  }
}

type CountryOption = {
  value: string,
  name: string,
};
