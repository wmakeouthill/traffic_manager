import { AfterViewInit, Component, ElementRef, ViewChild, viewChild, OnInit } from '@angular/core';
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

  ngOnInit (){
    console.log('ONINIT');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }


 onSubmit(title: String, ticketText: String) {
  console.log(title);
  console.log(ticketText);
  this.form?.nativeElement.reset();
 }


  // onSubmit(titleElement: HTMLInputElement) {
  //   const enteredTitle = titleElement.value;
  //   console.log("Entered title: " + enteredTitle);
  // }

}
