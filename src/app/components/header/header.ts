import { Component } from '@angular/core';
import { Telas } from '../telas/telas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule, Telas],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  telas = ['Clientes','Fornecedores','Funcionários','Materiais','Frota','Serviços','Materiais usados'];
}