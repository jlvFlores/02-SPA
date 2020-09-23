import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private heroesService: HeroesService ) {

  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

}
