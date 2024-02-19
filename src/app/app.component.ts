import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-components/new-components.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent],
  template: `
    <!-- <router-outlet></router-outlet> -->
    <h1>Curso de angular</h1>
    <app-new-components />
    {{ title }}
  `,
})
export class AppComponent {
  title = 'angular-project';
}
