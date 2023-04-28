import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProdcutsComponent} from "./prodcuts/prodcuts.component";

const routes: Routes = [
  {
    path : "products" ,component : ProdcutsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
