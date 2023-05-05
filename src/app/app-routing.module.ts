import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProdcutsComponent} from "./prodcuts/prodcuts.component";
import {CustomersComponent} from "./customers/customers.component";
import {OrdersComponent} from "./orders/orders.component";

const routes: Routes = [
  {
    path : "products" ,component : ProdcutsComponent
  },
  {
    path : "customers" , component : CustomersComponent
  },
  {
    path : "orders/:customerId", component : OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
