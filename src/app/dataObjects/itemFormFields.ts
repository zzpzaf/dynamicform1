import { IFormField } from "./IFormField";

export const ItemsFormFields: IFormField[] = [


        {
          dataField: 'itemId',
          controlType: 'input',
          controlName: 'itemId',
          fieldLabel: 'Item Id:',
          inputType: 'number',
          readOnly: true,

        },
        {
          dataField: 'itemName',
          controlType: 'input',
          controlName: 'itemName',
          fieldLabel: 'Item Name:',
          inputType: 'text',
          // initialValue: '',
        },
        {
          dataField: 'itemDescription',
          controlType: 'input',
          controlName: 'itemDescription',
          fieldLabel: 'Item Description:',
          inputType: 'text',
          // initialValue: '',
        },
        {
          dataField: 'itemModelYear',
          controlType: 'input',
          controlName: 'itemModelYear',
          fieldLabel: 'Model Year:',
          inputType: 'number',
          minValue: 2005,
          maxValue: 2030,
          // initialValue: 999,
        },
        {
          dataField: 'itemCrTimestamp',
          controlType: 'input',
          controlName: 'itemCreatedTimestamp',
          fieldLabel: 'Date/Time: ',
          inputType: 'datetime-local',
        },
        {
          dataField: 'categoryNames',
          controlType: 'select',
          controlName: 'itemCategories',
          fieldLabel: 'Categories:',
          inputType: 'number',
          options: [],
          multipleOptions: true,
          optionsSize: 6,
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