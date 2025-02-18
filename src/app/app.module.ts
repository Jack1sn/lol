import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutocadastroComponent } from './autocadastro/autocadastro.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RelatorioReceitasComponent } from './relatorio-receitas/relatorio-receitas.component';


@NgModule({
  declarations: [
    AppComponent,
    AutocadastroComponent,
    LoginComponent,
    RelatorioReceitasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
