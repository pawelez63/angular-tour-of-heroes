import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService{
	
	
	  getHeroes(): Promise<Hero[]> {
		return Promise.resolve(HEROES);
	}

	
	getHero(id: number): Promise<Hero> {
	  return this.getHeroes()
				 .then(heroes => heroes.find(hero => hero.id === id));
	}

}