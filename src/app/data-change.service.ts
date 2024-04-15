import { Injectable } from '@angular/core';
import { IItem } from './dataObjects/iitem';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ICategory } from './dataObjects/icatecory';

@Injectable({
  providedIn: 'root'
})
export class DataChangeService {

  public itemIdChange = new Subject<IItem>();
  public categories = new Subject<ICategory[]>();



  constructor() { }

  public setItem(message: IItem) {
  //  console.log( '>===>> ChangeService - ' + 'setItemId - '+  'Setting message value in ChangeService: ' + "%j", message ); 
  //  console.log( '>===>> ChangeService - ' + 'setItemId - '+  'Setting message value in ChangeService: ' + JSON.stringify(message) ); 
   this.itemIdChange.next(message);
  }

  public getItem(): Observable<IItem> {
    // console.log( '>===>> ChangeService - ' + 'getItemId - '+  'Getting message value from ChangeService.');
    return this.itemIdChange.asObservable();

  }



  public setCategories(message: ICategory[]) {
    // console.log( '>===>> ChangeService - ' + 'setCategories - '+  'Setting message value in ChangeService: ' + JSON.stringify(message) );
    this.categories.next(message);
  }

  public getCategories(): Observable<ICategory[]> {
    // console.log( '>===>> ChangeService - ' + 'getCategories - '+  'Getting message value from ChangeService.');
    return this.categories.asObservable();
  } 



}
