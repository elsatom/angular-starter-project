import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: './app.component.html'
})

export class AppComponent {
  title: string;

  constructor() {
    this.title = 'Angular Walk through';
  }
}
