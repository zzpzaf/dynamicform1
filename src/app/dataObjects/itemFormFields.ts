import { iformField } from "./IFormField";

export const ItemsFormFields: iformField[] = [

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
          controlType: 'button',
          controlName: 'submitButton',
          fieldLabel: 'Submit:',
          inputType: 'submit',
        },
      
]