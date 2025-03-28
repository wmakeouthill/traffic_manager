import { AfterViewInit, Component, ElementRef, ViewChild, viewChild, OnInit, output } from '@angular/core';
import { ControlComponent } from "../../../shared/control/control.component";
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  // @Output() add = new EventEmitter<{title: string; text: string}>();
  enteredTitle = '';
  enteredText = '';

  add = output<{title: string; text:string}>();

  ngOnInit (){
    console.log('ONINIT');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }


 onSubmit() {
  this.add.emit({title: this.enteredTitle, text: this.enteredText});
  // this.form?.nativeElement.reset();
  this.enteredTitle = '';
  this.enteredText = '';
 }


  // onSubmit(titleElement: HTMLInputElement) {
  //   const enteredTitle = titleElement.value;
  //   console.log("Entered title: " + enteredTitle);
  // }

}
