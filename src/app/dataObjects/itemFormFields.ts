import { Validators } from "@angular/forms";
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
          validators: [
            {validatorName: 'required', validator: Validators.required, validatorErrorMessage: 'The Item Name field is required.'},
            {validatorName: 'minlength', validator: Validators.minLength(2), validatorErrorMessage: 'The Item Name field  must be at least 2 characters long.'},
          ],
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
          validators: [
            {validatorName: 'required', validator: Validators.required, validatorErrorMessage: 'The Model Year field is required.'},
            {validatorName: 'min', validator: Validators.min(2005), validatorErrorMessage: 'The Model Year field must be at least 2005.'},
            {validatorName: 'max', validator: Validators.max(2030), validatorErrorMessage: 'The Model Year field must be no more than 2030.'},
          ],
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