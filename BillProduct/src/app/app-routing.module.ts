import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddClientComponent } from './Components/client/add-client/add-client.component';
import { ClientComponent } from './Components/client/client.component';
import { AddProductComponent } from './Components/Products/add-product/add-product.component';
import { ProductListComponent } from './Components/Products/product-list/product-list.component';
import { DefaultComponent } from './layout/default/default.component';
import { HeaderComponent } from './Shared/header/header.component';

const routes: Routes = [{
  path:'',
  component:DefaultComponent,
  children:[{
    path:'',
    component:AppComponent
  },
  {
    path:'client',
    component:ClientComponent
  },
  {
    path:'product',
    component:ProductListComponent
  },
  {
    path:'addProduct',
    component:AddProductComponent
  },
  {
    path:'addClient',
    component:AddClientComponent
  }

]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
