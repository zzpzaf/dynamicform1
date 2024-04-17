import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ItemsFormFieldsService } from '../../items-form-fields.service';
import { Subscription } from 'rxjs';
import { IFormField, IFormFieldValidator } from '../../dataObjects/IFormField';

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
  public isFormSubmitted: boolean = false;

  public fornCardTitle: string = 'Dynamic Form with Dynamic Components';

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
            ,
            this.bindValidators(field['validators']!)   
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


  bindValidators(validators: IFormFieldValidator[]) {
    if (!validators || validators.length <= 0) return [];
    const validatorsList: any[] = [];
    validators.forEach((myValidator) => {
      validatorsList.push(myValidator.validator);
    });
    return Validators.compose(validatorsList);
  }



  onFormSubmit(event: Event): void {
    this.isFormSubmitted = true;
    if (this.dynFormGroup.invalid) {
      console.log('onFormSubmit() - dynFormGroup is invalid!');
      return;
    }
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
