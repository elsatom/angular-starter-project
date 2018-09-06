import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import {Hero} from './../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroList: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroList();
  }

    getHeroList(): void {
    this.heroService.getHeroList()
      .subscribe(heroes => this.heroList = heroes.slice(1, 5));
  }

}
