import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service'
import { Router } from '@angular/router'

@Component({
  selector: 'my-heroes',
  templateUrl: "heroes.component.html",
  styleUrls: ['heroes.component.css'],
  moduleId:module.id
  //providers: [HeroService] , // no needed anymore cause was provided for the parent module
})
export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes : Hero[];
  selectedHero: Hero;
  constructor(
    private heroService: HeroService,
    private router: Router
    ){

  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  gotoDetail(): void{
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

   hero : Hero = {
    id: 1,
    name: 'Windstorm'
  }
}