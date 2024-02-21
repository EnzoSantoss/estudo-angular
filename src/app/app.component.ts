import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-components/new-components.component';
import { TesteTemplateComponent } from './components/template/teste-template/teste-template.component';
import { PageGoodComponent } from './components/template/page-good/page-good.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NewComponent,
    TesteTemplateComponent,
    PageGoodComponent,
  ],
  template: `
    <!-- <router-outlet></router-outlet> -->
    <!-- <app-new-components /> -->
    <!-- <app-teste-template /> -->
    <app-page-good />
  `,
})
export class AppComponent {
  title = 'angular-project';
}
