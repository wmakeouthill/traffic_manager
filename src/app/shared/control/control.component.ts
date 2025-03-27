import { Component, input, ViewEncapsulation, ElementRef, inject, ContentChild, contentChild, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent implements AfterContentInit {
  // // @HostBinding('class') className = 'control';
  // @HostListener ('click') onClick() {
  //   console.log('Clicked!');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');


  ngAfterContentInit(){
    //...
  }

  onClick() {
      console.log('Clicked!');
      console.log(this.el);
      console.log(this.control);
    }

}
