import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AddMeal } from '../menu.actions';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  choices: ItemRec[] = [
    { item: 'Big Mac', price: 36 },
    { item: 'McDouble', price: 23 },
    { item: 'Cheese burger', price: 8 }
  ];

  @Select(state => state.meal.orderList) orderList$;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
  }

  add(item: ItemRec) {
    console.log('add');
    this.store.dispatch([
      new AddMeal(item)
    ]);
  }

}

export interface ItemRec {
  item: string;
  price: number;
}
