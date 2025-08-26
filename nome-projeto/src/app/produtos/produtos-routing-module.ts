import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Estoque } from './estoque/estoque';

const routes: Routes = [
  {path: 'Estoque', component: Estoque}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
