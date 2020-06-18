import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderPageComponent } from './order-page/order-page.component';

const routes: Routes = [
    { path: 'order', component: OrderPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class McDonaldRoutingModule {

}