import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { TelaClientes } from './components/tela-clientes/tela-clientes';
@Component({
  selector: 'app-root',
  imports: [Header, TelaClientes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('atividade-web');
}
