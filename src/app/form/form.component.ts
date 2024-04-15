import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemsFormFields } from '../dataObjects/itemFormFields';
import { DataChangeService } from '../data-change.service';
import { Subscription } from 'rxjs';
import { IItem } from '../dataObjects/iitem';



@Component({
  selector: 'dyn-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  
  constructor( 
    private formBuilder: FormBuilder, 
    private changeService: DataChangeService,
   ) { } 
  
  private itemChangeSubscription!: Subscription ;
  public dynFormGroup!: FormGroup;
  public formFields = ItemsFormFields;

  
  ngOnInit(): void {
    
    this.itemChangeSubscription = this.changeService.getItem().subscribe({
      next : (item: IItem) => {
        //console.log('>===>> formComponent - ngOnInit() - Updated item', item);
        this.updateFormFieldsInitialValues(item);
        this.setFormControlValues();
      }, 
      error: (error) => {
        console.log(">===>> formComponent -  ngOnInit() - "  + error + ' - Error getting Updated item from changeService.');
      }
    });

    this.initializeForm();
    this.setFormControlValues();
  }


  initializeForm(): void {
    const fbGroup = this.formBuilder.group({});
    this.formFields.forEach((field) => {
      fbGroup.addControl(field.controlName, new FormControl(""));
    });
    this.dynFormGroup = fbGroup;
  }

  setFormControlValues(): void {
    for(let control in this.dynFormGroup.controls){
      this.formFields.forEach((field) => {
        if(field.controlName === control){
          this.dynFormGroup.controls[control].patchValue(field.initialValue)
        }
      });
      // console.log(">===>> " + control + " - " + this.dynFormGroup.controls[control].value);
    }
  }

  updateFormFieldsInitialValues(item: IItem): void {
    this.formFields.forEach((field) => {
      const dataField = field.dataField;
      if (dataField !== undefined && item.hasOwnProperty(dataField)) {
        field.initialValue = item[dataField];
      }
    });
  }


  onFormSubmit(event: Event): void {
    console.log('onFormSubmit() - dynFormGroup', this.dynFormGroup);
  }




  ngOnDestroy() {
    this.unSubscribe();
  }

  unSubscribe() {
    if (!!this.itemChangeSubscription) this.itemChangeSubscription.unsubscribe();
  }

}
