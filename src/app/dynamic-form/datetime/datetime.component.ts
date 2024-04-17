import { Component } from '@angular/core';
import { MTX_DATETIME_FORMATS } from '@ng-matero/extensions/core';
import { MtxDatetimepickerType, MtxDatetimepickerMode, MtxCalendarView } from '@ng-matero/extensions/datetimepicker';
import { IFormField } from 'src/app/dataObjects/IFormField';

@Component({
  selector: 'form-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['../form/form.component.scss',
              './datetime.component.scss'
             ],
  providers: [
              {
                provide: MTX_DATETIME_FORMATS,
                useValue: {
                  parse: {
                    dateInput: 'D',
                    monthInput: 'LLLL',
                    yearInput: 'yyyy',
                    datetimeInput: 'yyyy-MM-dd HH:mm:ss',
                    timeInput: 't',
                  },
                  display: {
                    dateInput: 'D',
                    monthInput: 'LLLL',
                    yearInput: 'yyyy',
                    datetimeInput: 'yyyy-MM-dd HH:mm:ss',
                    timeInput: 't',
                    monthYearLabel: 'yyyy',
                    dateA11yLabel: 'DDD',
                    monthYearA11yLabel: 'LLLL yyyy',
                    popupHeaderDateLabel: 'ccc, dd LLL',
                  },
                },
              },
            ],
                       
})

export class DatetimeComponent {

  field!: IFormField;
  fGroup: any;


  constructor() {}
  mtxType!: MtxDatetimepickerType;
  mtxMode: MtxDatetimepickerMode = 'auto';
  mtxStartView: MtxCalendarView = 'month';



  ngOnInit() {

    if (this.field.inputType == 'datetime-local') {
      this.mtxType = 'datetime';
    } else if (this.field.inputType == 'date') {  
      this.mtxType = 'date'; 
    } else if (this.field.inputType == 'time') {
      this.mtxType = 'time';
    } 
    // console.log('    >=====>> mtxType: ',this.mtxType);

  } 


}
