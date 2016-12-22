import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getLogo() {
    if (window.innerWidth > 500) {
      return '/assets/img/kudiobox-logo-wide.png';
    }
    return '/assets/img/kudiobox-logo.png';
  }
}
