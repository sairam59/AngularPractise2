import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;
  isChecked = true;

  cars = [{ id: 1, name: 'Range Rover' },
  { id: 2, name: 'Toyota' },
  { id: 3, name: 'SUzuki' },
  { id: 4, name: 'BMW' }
  ];
  car = 2;

  options = {
    'fixed': false,
    'top': 0,
    'bottom': 0,
  };

  onChange($event) {
    console.log($event);
  }

  showAnswer() {
    this.showSpinner = true;

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000);
  }
}
