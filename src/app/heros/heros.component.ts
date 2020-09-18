import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];
  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.getHeroes();
  }
  constructor(private heroService: HeroService, private messageService: MessageService) { }
  onSelect(h: Hero): void {
    this.selectedHero = h;
    this.messageService.add(`HeroesComponent: Selected hero id=${h.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
