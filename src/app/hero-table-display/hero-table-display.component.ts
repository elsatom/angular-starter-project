import { HEROCARRERLIST } from './../hero-carrer-list';
import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import {HeroCarrer} from './../hero-carrer';
import { DataTableModule } from 'primeng/primeng';


@Component({
  selector: 'app-hero-table-display',
  templateUrl: './hero-table-display.component.html',
  styleUrls: ['./hero-table-display.component.css']
})
export class HeroTableDisplayComponent implements OnInit {

  heroCarrerList: HeroCarrer[];
  constructor() {
    this.heroCarrerList = HEROCARRERLIST;
   }

  ngOnInit() {
  }

}
