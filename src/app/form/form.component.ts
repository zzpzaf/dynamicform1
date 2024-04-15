import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemsFormFields } from '../dataObjects/itemFormFields';
import { DataChangeService } from '../data-change.service';
import { Subscription } from 'rxjs';
import { IItem } from '../dataObjects/iitem';
import { DataService } from '../data.service';
import { ICategory } from '../dataObjects/icatecory';
import { IFormOptions } from '../dataObjects/IFormField';



@Component({
  selector: 'dyn-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  
  constructor( 
    private formBuilder: FormBuilder, 
    private changeService: DataChangeService,
    private dataServise: DataService, 
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

    this.updateOptions('itemCategories');

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

  // updateFormFieldsInitialValues(item: IItem): void {
  //   this.formFields.forEach((field) => {
  //     const dataField = field.dataField;
  //     if (dataField !== undefined && item.hasOwnProperty(dataField)) {
  //       field.initialValue = item[dataField];
  //     }
  //   });
  // }

  updateFormFieldsInitialValues(item: IItem): void {
    this.formFields.forEach((field) => {
      const dataField = field.dataField;
      if (dataField !== undefined && item.hasOwnProperty(dataField)) {
        
        if (field.options) {
          let initValKeys: any[] = [];
          item.categoryNames.forEach((category: string) => {
          field.options!.forEach((option: IFormOptions) => {
              if (option.optionValue === category) {
                option.isOptionSelected = true;
                initValKeys.push(option.optionKey);
              }
            });
          });
          field.initialValue = initValKeys;
          // console.log('>===>> updateFormFieldsInitialValues() - field.initialValue', field.initialValue);
        } else {
          field.initialValue = item[dataField];
        }

      }
    });
  }


  updateOptions(cotrolName: string) {
    this.dataServise.getCategories().subscribe((categories: ICategory[]) => {
      //console.log('>===>> updateItem() - categories', categories);
      let options: IFormOptions[] = [];
      categories.forEach((category: ICategory) => {
        options.push({optionKey: category.categoryId, optionValue: category.categoryName});
      });
      this.formFields.forEach((field) => {
        if( field.controlName === cotrolName && field.controlType === 'select') {
          field.options = options;
        }
      });

      this.changeService.setCategories(categories);
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
