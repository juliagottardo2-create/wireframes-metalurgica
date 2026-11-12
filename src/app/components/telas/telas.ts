import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-telas',
  imports: [FormsModule],
  templateUrl: './telas.html',
  styleUrl: './telas.css',
})
export class Telas {
 @Input() telas: string [] = [];
} 
