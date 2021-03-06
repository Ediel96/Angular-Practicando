import { Component,  } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { HeroesServices } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {

  heroe:any = {};
  routeres: any;

  constructor( private activatedRouter: ActivatedRoute,
              private _heroesService: HeroesServices,
              
              ) {

    this.activatedRouter.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id'] );
    })

  }   
  


}
