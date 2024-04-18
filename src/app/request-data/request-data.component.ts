
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ItemFormFieldsService } from '../item-form-fields.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-request-data',
  templateUrl: './request-data.component.html',
  styleUrls: ['./request-data.component.scss']
})
export class RequestDataComponent {

  fornCardTitle: string = 'My Demo Form';
  requestFormGroup!: FormGroup;

  input1Label: string = 'Item Id';
  input1Placeholder: string = 'Input Id here';
  input1ControlNane: string = 'itemId';
 
  constructor( 
    private formBuilder: FormBuilder, 
    private itemService: ItemFormFieldsService
  ) { }

  
  ngOnInit(): void {
    // this.updateCategories();
    this.initializeForm();
    this.requestFormGroup.valueChanges.subscribe(val => {
      const id = this.requestFormGroup.get(this.input1ControlNane)?.value;
      if (id == undefined || id == null || id == '' || id <= 0) return;
      this.itemService.setItemId(id!);
    });

  }


  initializeForm(): void {
    const fbGroup = this.formBuilder.group({});
    fbGroup.addControl(this.input1ControlNane, new FormControl(""));
    this.requestFormGroup = fbGroup;
  }

}
