
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';
import { IItem } from '../dataObjects/iitem';
import { DataChangeService } from '../data-change.service';
import { Subscription } from 'rxjs';
import { ICategory } from '../dataObjects/icatecory';

@Component({
  selector: 'app-request-data',
  templateUrl: './request-data.component.html',
  styleUrls: ['./request-data.component.scss']
})
export class RequestDataComponent {

  fornCardTitle: string = 'My Demo Form';
  demoFormGroup!: FormGroup;

  input1Label: string = 'Item Id';
  input1Placeholder: string = 'Input Id here';
  input1ControlNane: string = 'itemId';

  submitButtomText: string = 'Get it';

 
  private itemChangeSubscription!: Subscription ;
  private categoriesUpdatedSubscription!: Subscription ;

  constructor( 
    private formBuilder: FormBuilder, 
    private itemsServise: DataService,
    private changeService: DataChangeService,
  ) { }

  
  ngOnInit(): void {
    this.initializeForm();
  }




  initializeForm(): void {
    const fbGroup = this.formBuilder.group({});
    fbGroup.addControl(this.input1ControlNane, new FormControl(""));
    this.demoFormGroup = fbGroup;
  }




  onFormSubmit(event: Event): void {


    const id = this.demoFormGroup.get(this.input1ControlNane)?.value;
    // console.log('>===>> onFormSubmit() - id', id);
    if (id == undefined || id == null || id == ''|| id <= 0) {
      return;
    } else {
      this.updateItem(id);
      this.updateCategories();
    }
    
    // Avoid re-subscribing again and again
    // So, if a subscription is already active, unsubscribe it
    this.unSubscribe();

    this.getItem();
    this.getCategories();

  }


  updateItem(id:number) {    
    //console.log('>===>> updateItem() - id', id);
    this.itemsServise.getItems().subscribe((items: IItem[]) => {
      const item = items.find((item: IItem) => item['itemId'] === id);
      this.changeService.setItem(item!);
      //console.log('>===>> updateItem() - item', item);
    });
  }


  updateCategories() {
    this.itemsServise.getCategories().subscribe((categories: ICategory[]) => {
      //console.log('>===>> updateItem() - categories', categories);
      this.changeService.setCategories(categories);
    });
  }
  

  getItem(){
    this.itemChangeSubscription = this.changeService.getItem().subscribe({
      next : (item: IItem) => {
        console.log('>===>> onFormSubmit() - Updated item', item);
      }, 
      error: (error) => {
        console.log(">===>> onFormSubmit() - "  + error + ' - Error getting Updated item from changeService.');
      }
    });
  }

  getCategories(){
    this.categoriesUpdatedSubscription = this.changeService.getCategories().subscribe({
      next : (categories: ICategory[]) => {
        console.log('>===>> onFormSubmit() - Updated categories', categories);
      }, 
      error: (error) => {
        console.log(">===>> onFormSubmit() - "  + error + ' - Error getting Updated categories from changeService.');
      }
    });   
  }




  ngOnDestroy() {
    this.unSubscribe();
  }

  unSubscribe() {
    if (!!this.itemChangeSubscription) this.itemChangeSubscription.unsubscribe();
    if (!!this.categoriesUpdatedSubscription) this.categoriesUpdatedSubscription.unsubscribe();
  }

}
