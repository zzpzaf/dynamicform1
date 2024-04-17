import { Component } from '@angular/core';
import { IFormField } from 'src/app/dataObjects/IFormField';

@Component({
  selector: 'form-input',
  templateUrl: './input.component.html',
  styleUrls: ['../form/form.component.scss',
              './input.component.scss'
             ]
})
export class InputComponent {

  field!: IFormField;
  fGroup: any;

}


