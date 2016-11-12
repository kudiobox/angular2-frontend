import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component'
import { setTitle } from './utils'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle = 'Home';
  constructor() {
    setTitle(this.pageTitle);
  }
}
