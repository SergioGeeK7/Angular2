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
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
          .then(hero => {
            this.heroes.push(hero);
            this.selectedHero = null;
          });
  }
  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }

   hero : Hero = {
    id: 1,
    name: 'Windstorm'
  }
}