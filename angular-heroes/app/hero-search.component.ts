import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'

import { HeroSearchService } from './hero-search.service'
import { Hero } from './hero'

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: 'hero-search.component.html',
    styleUrls: [ 'hero-search.component.css' ],
    providers: [HeroSearchService] // to inject the service
    // Registering at a component level means you get a new instance of the service with each new instance of that component.
})
export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>;
    // A Subject is a producer of an observable event stream; searchTerms produces an Observable of strings
    private searchTerms = new Subject<string>();
    constructor(
        private heroSearchService:HeroSearchService,
        private router:Router
    ){

    }
    //Push a search term into the Observable stream
    search(term: string): void {
        this.searchTerms.next(term);
    }
    /**
     *  A Subject is also an Observable. 
     *  We're going to turn the stream of search 
     *  terms into a stream of Hero arrays and assign the result to the heroes property
     * 
     *  Fortunately, we can chain Observable operators to the string Observable that reduce the request flow.
     *  We'll make fewer calls to the HeroSearchService and still get timely results. Here's how:
     * 
     *  debounceTime(300) waits until the flow of new string events pauses for 300 milliseconds 
     *  before passing along the latest string. We'll never make requests more frequently than 300ms.
     * 
     *  distinctUntilChanged() ensures that we only send a request
     *  if the filter text changed. There's no point in repeating a request for the same search term.
     * 
     *  switchMap() calls our search service for each search term that makes
     *  it through the debounce and distinctUntilChanged gauntlet. 
     *  It cancels and discards previous search observables, returning only the latest search service observable.
     * 
     *  switchMap preserves the original request order while returning only the observable 
     *  from the most recent http method call. Results from prior calls are canceled and discarded.
     *  http://www.learnrxjs.io/operators/transformation/switchmap.html
     * 
     * 
     * 
     */
    ngOnInit() :void{
        // this will emit events 
        this.heroes = 
            this.searchTerms
            .debounceTime(300) // wait for 300ms pause in events
            .distinctUntilChanged() // ignore if next search term is same as previous ->wait 300ms every time
            .switchMap(term =>{  // switch to new Observable each time
                // return a new Observable
                return term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([])
            } )
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<Hero[]>([]);
            });            
    }
    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}