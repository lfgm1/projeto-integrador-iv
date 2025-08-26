import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})
export class Diretiva {

  cursos = [
    { nome: 'Luiz', id: '1', status: 'ativo' },
    { nome: 'Luiz2', id: '2', status: 'Negativo' }
  ];

}
