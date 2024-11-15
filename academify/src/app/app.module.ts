import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaralunosComponent } from './listaralunos/listaralunos.component';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';
import { InseriralunoComponent } from './inseriraluno/inseriraluno.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaralunosComponent,
    PaginainicialComponent,
    InseriralunoComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
