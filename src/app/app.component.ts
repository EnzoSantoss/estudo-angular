import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-components/new-components.component';
import { TesteTemplateComponent } from './components/template/teste-template/teste-template.component';
import { PageGoodComponent } from './components/template/page-good/page-good.component';
import { DenerComponent } from './components/template/dener/dener.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { ControlFlowComponent } from './components/template/control-flow/control-flow.component';

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
    TemplateBindingComponent,
    ControlFlowComponent,
  ],
  template: `
    <!-- <router-outlet></router-outlet> -->
    <!-- <app-new-components /> -->
    <!-- <app-teste-template /> -->
    <!-- <app-page-good /> -->
    <!-- <app-dener /> -->
    <!-- <app-template-binding /> -->
    <app-control-flow />
  `,
})
export class AppComponent {
  title = 'angular-project';
}
