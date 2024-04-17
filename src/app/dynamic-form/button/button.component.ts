import { Component } from '@angular/core';
import { IFormField } from 'src/app/dataObjects/IFormField';

@Component({
  selector: 'form-button',
  templateUrl: './button.component.html',
  styleUrls: ['../form/form.component.scss',
              './button.component.scss'
             ]
})
export class ButtonComponent {

  field!: IFormField
  fGroup: any

}
