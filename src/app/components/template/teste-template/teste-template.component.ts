import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teste-template',
  standalone: true,
  imports: [],
  templateUrl: './teste-template.component.html',
  styleUrl: './teste-template.component.scss',
})
export class TesteTemplateComponent {
  public img1 = '../../../../assets/craque-neto.jpg';
  public img2 =
    '../../../../assets/jose-ferreira-neto-no-corinthians_c_corinthians.jpg';
  public img3 = '../../../../assets/transferir.jpg';

  public page_two = '../other-page/other-page.component.html';
}
