import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-components/new-components.component';
import { TesteTemplateComponent } from './components/template/teste-template/teste-template.component';
import { PageGoodComponent } from './components/template/page-good/page-good.component';
import { DenerComponent } from './components/template/dener/dener.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NewComponent,
    TesteTemplateComponent,
    PageGoodComponent,
    DenerComponent,
  ],
  template: `
    <!-- <router-outlet></router-outlet> -->
    <!-- <app-new-components /> -->
    <!-- <app-teste-template /> -->
    <!-- <app-page-good /> -->
    <app-dener />
  `,
})
export class AppComponent {
  title = 'angular-project';
}
