import { Injectable } from '@angular/core';
import { IItem } from './dataObjects/iitem';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICategory } from './dataObjects/icatecory';
import { ItemsFormFields } from './dataObjects/itemFormFields';
import { IFormField, IFormOptions } from './dataObjects/IFormField';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ItemsFormFieldsService {
  private formFields: IFormField[] = ItemsFormFields;
  private formFields$$ = new BehaviorSubject<IFormField[]>(this.formFields);

  constructor(private itemsDataServise: DataService) {
    this.itemsDataServise
      .getCategories()
      .subscribe((categories: ICategory[]) => {
        let optionsObject: { key: number, value: any }[] = [];
        categories.forEach((category: ICategory) => {
          optionsObject.push({ key: category.categoryId, value: category.categoryName });
        });
        this.setFormFieldSelectOptions('itemCategories', optionsObject);
      });
  }

  public setItemId(itemId: number) {
    this.itemsDataServise.getItems().subscribe((items: IItem[]) => {
      const item = items.find((item: IItem) => item['itemId'] === itemId);
      console.log(">===>> item:" + JSON.stringify(item!));
      if (item) this.updateFormFieldsInitialValues(item);
    });
  }

  public getFormFields(): Observable<IFormField[]> {
    return this.formFields$$.asObservable();
  }

  private setFormFieldSelectOptions(cotrolName: string, selOptions: { key: number, value: any }[]) {
    let ffoptions: IFormOptions[] = [];
    selOptions.forEach((selOption: { key: number, value: any }) => {
      ffoptions.push({
        optionKey: selOption.key,
        optionValue: selOption.value,
      });
    });
    this.formFields.find(
      (field) =>
        field.controlName === cotrolName && field.controlType === 'select'
    )!.options = ffoptions;
    this.formFields$$.next(this.formFields);
  }



  
  private updateFormFieldsInitialValues(item: IItem): void {
    this.formFields.forEach((field) => {
      const dataField = field.dataField;
      if (dataField === undefined || !item.hasOwnProperty(dataField)) return;
      if (
        field.options &&
        field.controlType === 'select' &&
        field.controlName === 'itemCategories'
      )
        field.initialValue = this.updateSelectOptions(
          field,
          item.categoryNames
        );
      if (field.options && field.inputType === 'radio')
        field.options = this.updateRadioOptions(field, item.itemStatusId);
      if (!field.options) field.initialValue = item[dataField];
      this.formFields$$.next(this.formFields);
    });
  }

  private updateSelectOptions(
    field: IFormField,
    selectedValues: string[]
  ): any[] {
    let initValKeys: any[] = [];
    selectedValues.forEach((val: string) => {
      field.options!.forEach((option: IFormOptions) => {
        if (option.optionValue === val) {
          option.isOptionSelected = true;
          initValKeys.push(option.optionKey);
        }
      });
    });
    return initValKeys;
  }

  private updateRadioOptions(field: IFormField, key: any): any[] | undefined {
    field.options!.forEach((option: IFormOptions) => {
      if (option.optionKey === key) {
        option.isOptionSelected = true; 
        field.initialValue = option.optionKey;
      } else { 
        option.isOptionSelected = false;
      }
    });
    return field.options;
  }
}
