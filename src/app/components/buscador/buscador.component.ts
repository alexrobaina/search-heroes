import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: any = {};
  termino: string;
  router: any;

  constructor( private activateRoute: ActivatedRoute,
               private _heroesService: HeroesService  ) {

  }

  ngOnInit() {
    this.activateRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params ['termino']);
      console.log( this.heroes );
    });
  }
  mostrarBusqueda(t: string) {
    if (t === '') { return 'termino'; } else { return t; }
  }

  verHeroe( idx: number ) {
    this.router.navigate( ['/heroe', idx] ); }
}
