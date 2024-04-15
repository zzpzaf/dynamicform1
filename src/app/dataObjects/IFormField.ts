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
    inputType?: string;
    initialValue?: any | any[];
    options?: IFormOptions[];
    multipleOptions?: boolean;
    promptText?: string;
}