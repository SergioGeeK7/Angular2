"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var hero_search_service_1 = require('./hero-search.service');
var HeroSearchComponent = (function () {
    function HeroSearchComponent(heroSearchService, router) {
        this.heroSearchService = heroSearchService;
        this.router = router;
        // A Subject is a producer of an observable event stream; searchTerms produces an Observable of strings
        this.searchTerms = new Subject_1.Subject();
    }
    //Push a search term into the Observable stream
    HeroSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
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
    HeroSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroes =
            this.searchTerms
                .debounceTime(300) // wait for 300ms pause in events
                .distinctUntilChanged() // ignore if next search term is same as previous ->wait 300ms every time
                .switchMap(function (term) {
                // return a new Observable
                return term ? _this.heroSearchService.search(term) : Observable_1.Observable.of([]);
            })
                .catch(function (error) {
                // TODO: real error handling
                console.log(error);
                return Observable_1.Observable.of([]);
            });
    };
    HeroSearchComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.router.navigate(link);
    };
    HeroSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hero-search',
            templateUrl: 'hero-search.component.html',
            styleUrls: ['hero-search.component.css'],
            providers: [hero_search_service_1.HeroSearchService]
        }), 
        __metadata('design:paramtypes', [hero_search_service_1.HeroSearchService, router_1.Router])
    ], HeroSearchComponent);
    return HeroSearchComponent;
}());
exports.HeroSearchComponent = HeroSearchComponent;
//# sourceMappingURL=hero-search.component.js.map