import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

const ItemsFormFields = [

  {
    controlType: 'input',
    controlName: 'itemName',
    fieldLabel: 'Item Name:',
    inputType: 'text',
    initialValue: 'My fantastic Item',
  },
  {
    controlType: 'input',
    controlName: 'itemId',
    fieldLabel: 'Item Id:',
    inputType: 'number',
    initialValue: 123,
  },
  {
    controlType: 'button',
    controlName: 'submitButton',
    fieldLabel: 'Submit:',
    inputType: 'submit',
  },

]

@Component({
  selector: 'dyn-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  
  constructor( 
    private formBuilder: FormBuilder, 
   ) { } 
  
  dynFormGroup!: FormGroup;
  formFields = ItemsFormFields;

  
  ngOnInit(): void {
    this.initializeForm();
    this.setFormValues();
  }


  initializeForm(): void {
    const fbGroup = this.formBuilder.group({});
    this.formFields.forEach((field) => {
      fbGroup.addControl(field['controlName'], new FormControl(""));
    });
    this.dynFormGroup = fbGroup;
  }

  setFormValues(): void {
    for(let control in this.dynFormGroup.controls){
      this.formFields.forEach((field) => {
        if(field['controlName'] === control){
          this.dynFormGroup.controls[control].patchValue(field['initialValue'])
        }
      });
      console.log(">===>> " + control + " - " + this.dynFormGroup.controls[control].value);
    }
  }


  onFormSubmit(event: Event): void {
    console.log('onFormSubmit() - dynFormGroup', this.dynFormGroup);
  }

}
