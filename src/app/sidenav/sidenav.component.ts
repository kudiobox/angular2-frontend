import { Component, OnInit } from '@angular/core';
import 'animate.css';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  isClosed: boolean;

  constructor() { }

  ngOnInit() {
    this.isClosed = true;
  }

  toggle(e) {
    this.isClosed = !this.isClosed;
    e.target.blur();
  }

}
