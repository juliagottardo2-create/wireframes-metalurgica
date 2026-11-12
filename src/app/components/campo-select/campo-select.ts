import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-campo-select',
  imports: [FormsModule],
  templateUrl: './campo-select.html',
  styleUrl: './campo-select.css',
})
export class CampoSelect {
  @Input() label = '';
  @Input() opcoes: string[] = [];
}




