import { HeroService } from './../hero.service';
import { HeroDetailComponent } from './../hero-detail/hero-detail.component';
import { HEROELIST } from './../hero-list';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroList: Hero[];
  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroList();
  }

  getHeroList(): void {
    this.heroService.getHeroList()
      .subscribe(heroes => this.heroList = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroList.push(hero);
      });
  }

  delete(hero: Hero): void {
  this.heroes = this.heroes.filter(h => h !== hero);
  this.heroService.deleteHero(hero).subscribe();
}

}
