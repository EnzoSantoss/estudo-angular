import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss',
})
export class TemplateBindingComponent implements AfterViewInit {
  @ViewChild('name') public nameImput!: ElementRef;
  @ViewChild('h1') public nameH1!: ElementRef;
  ngAfterViewInit() {
    console.log(this.nameImput.nativeElement.value);
    console.log(this.nameH1.nativeElement.innerText);
  }
}
