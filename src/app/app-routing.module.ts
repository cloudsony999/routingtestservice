import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ServivelayerComponent } from './servivelayer/servivelayer.component';

const a: Routes = [
  {path:"rishin",component:HomeComponent},
  {path:"deblina",component:ProductComponent},
  {path:"amitava",component:ServivelayerComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(a)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const allcomponents=[HomeComponent,ProductComponent,ServivelayerComponent]
