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
export class NewComponent {
  public img1 = '../../../assets/craque-neto.jpg';
  public img2 = '../../../assets/fotoPerfil.jpg';
  public img3 =
    '../../../assets/jose-ferreira-neto-no-corinthians_c_corinthians.jpg';
}
