import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPageComponent } from './order-page/order-page.component';
import { MenuComponent } from './menu/menu.component';
import { McDonaldRoutingModule } from './mcdonald-routing.module';
import { MealState } from './meal.state';

import { NgxsModule } from '@ngxs/store';

@NgModule({
  declarations: [OrderPageComponent, MenuComponent],
  imports: [
    CommonModule,
    McDonaldRoutingModule,
    NgxsModule.forFeature([MealState])
  ]
})
export class McdonaldModule { }