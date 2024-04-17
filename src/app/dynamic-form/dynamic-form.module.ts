import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { SelectComponent } from './select/select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { ApplyFormControlDirective } from './apply-form-control.directive';



@NgModule({
  declarations: [
    FormComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    CheckboxComponent,
    RadioComponent,
    DatetimeComponent,
    ApplyFormControlDirective, 
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [FormComponent],
})
export class DynamicFormModule { }
