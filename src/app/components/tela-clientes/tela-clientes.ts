import { Component, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import type { Cliente } from '../../models/cliente';
import { CampoSelect } from '../campo-select/campo-select';
import { Botao } from '../botao/botao';

@Component({
  selector: 'app-tela-clientes',
  imports: [FormsModule, CampoSelect, Botao],
  templateUrl: './tela-clientes.html',
  styleUrl: './tela-clientes.css',
})
export class TelaClientes {
  opcoesStatus: string[] = ['Ativo', 'Inativo'];
  opcoesObras: string[] = ['Com obra em andamento', 'Todos'];
  minimoObras: string = '';
  clientes: Cliente[] = [
    {nome:'Mariana Souza Lima', cpf: '123.456.789-09', telefone: '(45) 99812-3401'},
    {nome:'Mariana Souza Lima', cpf: '123.456.789-09', telefone: '(45) 99703-2258'},
    {nome:'Ricardo Alves Pereira', cpf: '987.654.321-00', telefone: '(45) 99934-7720'},
    {nome:'João Pedro Bertolini', cpf: '321.654.987-11', telefone: '(44) 99145-6632'},
    {nome:'Luciana Kunz Schneider', cpf: '741.852.963-40', telefone: '(41) 98877-1205'}
  ]
  
    limpar(): void{
    this.minimoObras = '';
    }
  }
  