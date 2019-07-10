import { Component, OnInit } from '@angular/core';
import {HeroesServices, Heroes} from '../../servicios/heroes.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroes  [] = [];

  constructor( private _heroesService: HeroesServices) { 
    console.log("contructor");
  }

  ngOnInit() {

    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }

}
