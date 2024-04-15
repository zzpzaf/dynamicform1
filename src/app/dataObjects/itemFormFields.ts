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
    dataField: 'isItemEnabled',
    controlType: 'input',
    controlName: 'isItemEnabled',
    fieldLabel: 'Enabled:',
    inputType: 'checkbox',
    initialValue: true,
  },
  {
    controlType: 'button',
    controlName: 'submitButton',
    fieldLabel: 'Submit:',
    inputType: 'submit',
  },


]