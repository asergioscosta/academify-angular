import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

import { AlunoService } from './services/aluno.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaralunosComponent } from './listaralunos/listaralunos.component';
import { PaginainicialComponent } from './paginainicial/paginainicial.component';
import { InseriralunoComponent } from './inseriraluno/inseriraluno.component';
import { HeaderComponent } from './header/header.component';
import { VisualizaralunoComponent } from './visualizaraluno/visualizaraluno.component';
import { EditaralunoComponent } from './editaraluno/editaraluno.component';
import { FooterComponent } from './footer/footer.component';

import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ListaralunosComponent,
    PaginainicialComponent,
    InseriralunoComponent,
    VisualizaralunoComponent,
    EditaralunoComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [
    provideHttpClient(),
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }