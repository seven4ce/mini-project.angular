import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'miniProject';

  title: string;

  constructor() {
    this.title = 'Mini Market';
  }
}
