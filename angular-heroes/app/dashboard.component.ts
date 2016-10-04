import { Component ,OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Router } from '@angular/router'

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit{ 

    heroes:Hero[] = []

    constructor(
        private HeroService:HeroService,
        private router:Router){

    }
    ngOnInit():void {
        this
            .HeroService
            .getHeroes()
            .then(heroes => this.heroes = heroes);
    }
    gotoDetail(hero:Hero):void{
        let link = ['/detail',hero.id];
        this.router.navigate(link);
    }
    
}
