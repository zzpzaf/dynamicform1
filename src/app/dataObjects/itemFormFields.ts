import { IFormField } from "./IFormField";

export const ItemsFormFields: IFormField[] = [

        {
          dataField: 'itemName',
          controlType: 'input',
          controlName: 'itemName',
          fieldLabel: 'Item Name:',
          inputType: 'text',
          // initialValue: '',
        },
        {
          dataField: 'itemId',
          controlType: 'input',
          controlName: 'itemId',
          fieldLabel: 'Item Id:',
          inputType: 'number',
          // initialValue: 0,

        },
        {
          dataField: 'categoryNames',
          controlType: 'select',
          controlName: 'itemCategories',
          fieldLabel: 'Categories:',
          inputType: 'number',
          options: [],
        },
        {
          controlType: 'button',
          controlName: 'submitButton',
          fieldLabel: 'Submit:',
          inputType: 'submit',
        },
      
      
]