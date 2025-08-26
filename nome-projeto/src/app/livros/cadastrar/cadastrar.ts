import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {

  nome = 'Flavio';

  caminhoImagem = '/workspaces/projeto-integrador-iv/nome-projeto/public/favicon.ico';

  dizerOi() {
    this.nome = 'Alunos do Quarto B';
  }
  
}
