import { Component } from '@angular/core';
import { IFormField } from 'src/app/dataObjects/IFormField';

@Component({
  selector: 'form-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['../form/form.component.scss',
              './datetime.component.scss'
             ]
})
export class DatetimeComponent {

  field!: IFormField;
  fGroup: any;

}
