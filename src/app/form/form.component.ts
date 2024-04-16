import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemsFormFieldsService } from '../items-form-fields.service';
import { Subscription } from 'rxjs';
import { IFormField } from '../dataObjects/IFormField';

@Component({
  selector: 'dyn-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  constructor(
    private formBuilder: FormBuilder,
    private formFieldsService: ItemsFormFieldsService
  ) {}

  private formFieldsSubscription!: Subscription;
  public dynFormGroup!: FormGroup;
  public formFields: IFormField[] = [];

  ngOnInit(): void {
    this.formFieldsSubscription = this.formFieldsService
      .getFormFields()
      .subscribe({
        next: (fFields: IFormField[]) => {
          this.formFields = fFields;
          this.setFormControlValues();
        },
        error: (error) => {
          console.log(
            '>===>> formComponent -  ngOnInit() - ' +
              error +
              ' - Error getting Updated formFields from Service.'
          );
        },
      });
  }

  initializeForm(): void {
    const fbGroup = this.formBuilder.group({});
    this.formFields.forEach((field) => {
      fbGroup.addControl(
        field.controlName,
        new FormControl(
          field.initialValue !== undefined && field.initialValue !== null
            ? field.initialValue
            : ''
        )
      );
    });
    this.dynFormGroup = fbGroup;
  }

  setFormControlValues(): void {
    if (this.dynFormGroup === undefined) {
      this.initializeForm();
    }
    for (let control in this.dynFormGroup.controls) {
      this.formFields.forEach((field) => {
        if (field.controlName === control) {
          this.dynFormGroup.controls[control].patchValue(field.initialValue);
        }
      });
    }
  }

  onFormSubmit(event: Event): void {
    console.log('onFormSubmit() - dynFormGroup', this.dynFormGroup);
  }

  ngOnDestroy() {
    this.unSubscribe();
  }

  unSubscribe() {
    if (!!this.formFieldsSubscription)
      this.formFieldsSubscription.unsubscribe();
  }
}
