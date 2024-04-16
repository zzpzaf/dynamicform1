

export type standardInputType =
  | 'color'
  | 'checkbox'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'search'
  | 'tel'
  | 'text'
  | 'submit'
  | 'time'
  | 'url'
  | 'week';


export interface IFormOptions {
    [key: string]: any;
    optionKey: number | string;
    optionValue: any;
    order?: number;
    isOptionSelected?: boolean;
}

export interface IFormField {
    [key: string]: any;
    dataField?: string;
    controlName: string;
    controlType: string;
    fieldLabel: string;
    inputType?: standardInputType;
    readOnly?: boolean;
    initialValue?: any | any[];
    options?: IFormOptions[];
    multipleOptions?: boolean;
    promptText?: string;
    optionsSize?: number;
    minValue?: number;
    maxValue?: number; 
    stepValue?: number;

}

