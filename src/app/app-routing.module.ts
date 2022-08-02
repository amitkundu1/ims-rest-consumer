import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { RegisterDealerComponent } from './register-dealer/register-dealer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DealersListComponent } from './dealers-list/dealers-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full'},
  { path:'products',component:ProductListComponent },
  { path:'details/:id',component:ProductDetailsComponent},
  { path:'add',component:CreateProductComponent},
  { path:'update/:id',component:UpdateProductComponent},
  { path:'register', component:RegisterDealerComponent},
  { path:'login',component:LoginComponent},
  { path:'logout',component:LogoutComponent},
  { path:'dealers',component:DealersListComponent},
  { path: 'home',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
