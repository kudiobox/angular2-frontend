import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { NavbarComponent } from './navbar/navbar.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Home';
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
