import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocadastroComponent } from './autocadastro/autocadastro.component'; // Substitua pelo caminho correto
import { RelatorioReceitasComponent } from './relatorio-receitas/relatorio-receitas.component';
const routes: Routes = [
    // Outras rotas
    { path: 'autocadastro', component: AutocadastroComponent },
    { path: 'receitas', component: RelatorioReceitasComponent } // Adicione esta linha
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
