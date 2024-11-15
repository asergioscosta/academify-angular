import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaralunosComponent } from './listaralunos/listaralunos.component';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';
import { InseriralunoComponent } from './inseriraluno/inseriraluno.component';

const routes: Routes = [
  { path: "", redirectTo: 'paginainicial', pathMatch: 'full' },
  { path: "paginainicial", component: PaginainicialComponent },
  { path: "listaralunos", component: ListaralunosComponent },
  { path: "inseriraluno", component: InseriralunoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
