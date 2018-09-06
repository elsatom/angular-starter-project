import { Hero } from './../hero';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  @Input()
  items: Hero[];

  @Output()
  addHero = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

  addNewHero() {
    this.addHero.emit(this.items);
  }

}
