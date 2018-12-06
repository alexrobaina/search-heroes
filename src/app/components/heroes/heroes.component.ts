import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor( private _heroesService: HeroesService,
        private router: Router
    ) {

  }

  heroes: Heroe[] = [];

  ngOnInit() {

this.heroes = this._heroesService.getHeroes();

}

verHeroe( idx: number ) {
  this.router.navigate( ['/heroe', idx] );

  }
}
