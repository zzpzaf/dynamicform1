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
          initialValue: 999,
        },
        {
          dataField: 'categoryNames',
          controlType: 'select',
          controlName: 'itemCategories',
          fieldLabel: 'Categories:',
          inputType: 'number',
          options: [],
          multipleOptions: true,
          promptText: 'Select at least one',
        },
        {
          dataField: 'itemStatusId',
          controlType: 'input',
          controlName: 'itemStatus',
          fieldLabel: 'Item Status:',
          inputType: 'radio',
          options: [
            {optionKey: 1, optionValue: 'Active'},
            {optionKey: 2, optionValue: 'Canceled'},
            {optionKey: 3, optionValue: 'Pending', isOptionSelected: true},
          ],
        },
        {
          dataField: 'isItemEnabled',
          controlType: 'input',
          controlName: 'isItemEnabled',
          fieldLabel: 'Enabled:',
          inputType: 'checkbox',
          initialValue: true,
        },
        {
          dataField: 'itemStatusId',
          controlType: 'input',
          controlName: 'itemStatus',
          fieldLabel: 'Item Status:',
          inputType: 'radio',
        },
        {
          controlType: 'button',
          controlName: 'submitButton',
          fieldLabel: 'Submit:',
          inputType: 'submit',
        },
      
      
]