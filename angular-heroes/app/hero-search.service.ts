import { Injectable } from '@angular/core'
import { Http,Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'    //The async pipe subscribes to the Observable and produces the array of heroes to *ngFor.
                                                // Observables are like streams of events
import { Hero } from './hero'

@Injectable()
export class HeroSearchService {
    constructor(private http:Http){

    }
    search(term:string):Observable<Hero[]> { // Like java strong type;you have to import every class
        return this.http
                    .get(`app/heroes/?name=${term}`)
                    .map((r:Response) => r.json().data as Hero[] );
    }
}