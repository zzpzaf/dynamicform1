import { Component } from '@angular/core';
import { IFormField } from 'src/app/dataObjects/IFormField';

@Component({
  selector: 'form-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['../form/form.component.scss',
              './checkbox.component.scss'
              ]
})
export class CheckboxComponent {

  field!: IFormField;
  fGroup: any;

}

