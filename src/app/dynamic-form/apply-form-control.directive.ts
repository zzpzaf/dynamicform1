import { ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { dynComponents } from '../dataObjects/itemFormFields';
import { IFormField, dynControlType } from '../dataObjects/IFormField';

@Directive({
  selector: '[applyFormControl]'
})
export class ApplyFormControlDirective {

  @Input()
  formField!: IFormField;
  @Input() 
  formGroup: any;

  constructor(private viewContainerRef: ViewContainerRef) {}
  private componentRef!: ComponentRef<any>;


  public ngAfterViewInit() {

    this.viewContainerRef.clear();
    
    const controlType: dynControlType = this.formField?.controlType;

    if (controlType) {
      const component = dynComponents[controlType];
      this.componentRef = this.viewContainerRef.createComponent(component);
      this.componentRef.instance.field = this.formField;
      this.componentRef.instance.fGroup = this.formGroup;
      this.componentRef.changeDetectorRef.detectChanges();     
    }

  }

}
