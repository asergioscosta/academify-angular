import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaralunosComponent } from './listaralunos/listaralunos.component';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';
import { InseriralunoComponent } from './inseriraluno/inseriraluno.component';
import { VisualizaralunoComponent } from './visualizaraluno/visualizaraluno.component';
import { EditaralunoComponent } from './editaraluno/editaraluno.component';

const routes: Routes = [
  { path: "", redirectTo: 'paginainicial', pathMatch: 'full' },
  { path: "paginainicial", component: PaginainicialComponent },
  { path: "listaralunos", component: ListaralunosComponent },
  { path: "inseriraluno", component: InseriralunoComponent },
  { path: "visualizaraluno", component: VisualizaralunoComponent },
  { path: "editaraluno", component: EditaralunoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
