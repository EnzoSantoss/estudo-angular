import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TesteComponent } from '../teste/teste.component';

@Component({
  selector: 'app-new-components',
  standalone: true,
  imports: [CommonModule, TesteComponent],
  templateUrl: './new-components.component.html',
  styleUrl: './new-components.component.scss',
})
export class NewComponent {}
