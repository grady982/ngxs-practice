import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { StartOver } from '../menu.actions';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})
export class OrderPageComponent implements OnInit {

  @Select(state => state.meal.orderList) orderList$;
  @Select(state => state.meal.price) price$;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    
  }

  startOver() {
    this.store.dispatch([
      new StartOver()
    ]);
  }

}
