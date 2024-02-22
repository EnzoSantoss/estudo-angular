import { Component, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dener',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dener.component.html',
  styleUrl: './dener.component.scss',
})
export class DenerComponent {
  public age = 30;
  public clientX = 0;
  public clientY = 0;
  public color = '';
  public name = 'Enzo Santos';

  constructor(private render: Renderer2) {}

  public sum() {
    return this.age++;
  }
  public sub() {
    return this.age--;
  }

  public mouseLoger(event: MouseEvent) {
    this.clientX = event.clientX;
    this.clientY = event.clientY;
  }
  public onChangeColor(event: any) {
    this.color = event?.target.value;
    this.render.setStyle(document.body, '--cor-fundo', this.color);
  }
}
