import { Component } from '@angular/core';
import { IFormField } from 'src/app/dataObjects/IFormField';

@Component({
  selector: 'form-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['../form/form.component.scss',
              './radio.component.scss'
             ]
})
export class RadioComponent {

  field!: IFormField;
  fGroup: any;

}
