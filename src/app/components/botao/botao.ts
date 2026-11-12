import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-botao',
  imports: [FormsModule],
  templateUrl: './botao.html',
  styleUrl: './botao.css',
})
export class Botao {
  @Input() texto: string = '';
}
