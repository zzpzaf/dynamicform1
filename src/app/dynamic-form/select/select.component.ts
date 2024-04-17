import { Component } from '@angular/core';
import { IFormField } from 'src/app/dataObjects/IFormField';

@Component({
  selector: 'form-select',
  templateUrl: './select.component.html',
  styleUrls: ['../form/form.component.scss',
              './select.component.scss'
             ]
})
export class SelectComponent {

  field!: IFormField;
  fGroup: any;

}

