import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';
import { Heroes } from './hero.service';
@Component({
  moduleId: module.id,
  selector: 'hero-list-basic',
  template: `
  <ul>
    <li *ngFor="let hero of heroes"
        (@flyInOut.start)="animationStarted($event)"
        (@flyInOut.done)="animationDone($event)"
        [@flyInOut]="'in'">
      {{hero.name}}
    </li>
  </ul>
`,
  template2: `
    <ul>
      <li *ngFor="let hero of heroes"
          [@heroState]="hero.state"
          (click)="hero.toggleState()">
        {{hero.name}}
      </li>
    </ul>
  `,
  styleUrls: ['hero-list.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('inactive <=> active', animate('100ms ease-out')), 
      // whether transition direction will apply the same time
      // The active => * transition applies when the element's state changes from active to anything else.
      // The * => * transition applies when any change between two states takes place.
      
        /*
        
        You can also apply a style during an animation but not keep it around after the animation finishes. You can define such styles inline, in the transition. In this example, the element receives one set of styles immediately and is then animated to the next. When the transition finishes, none of these styles are kept because they're not defined in a state.
        
        */
      
      transition('inactive => active', [
        style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.3)'
        }),
        animate('80ms ease-in', style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        }))
      ])
      
      
   


    ]),
      
      
      
      // Enter: void => *
      // Leave: * => void
      
      //transition(':enter', [ ... ]); // void => *
      //transition(':leave', [ ... ]); // * => void

      
  trigger('flyInOut', [
    state('in', style({transform: 'translateX(0)'})),
    transition('void => *', [
      style({transform: 'translateX(-100%)'}),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({transform: 'translateX(100%)'}))
    ])
  ])
      
  ],
  animations2: [
  trigger('heroState', [
    state('inactive', style({transform: 'translateX(0) scale(1)'})),
    state('active',   style({transform: 'translateX(0) scale(1.1)'})),
    transition('inactive => active', animate('100ms ease-in')),
    transition('active => inactive', animate('100ms ease-out')),
    transition('void => inactive', [
      style({transform: 'translateX(-100%) scale(1)'}),
      animate(100)
    ]),
    transition('inactive => void', [
      animate(100, style({transform: 'translateX(100%) scale(1)'}))
    ]),
    transition('void => active', [
      style({transform: 'translateX(0) scale(0)'}),
      animate(200)
    ]),
    transition('active => void', [
      animate(200, style({transform: 'translateX(0) scale(0)'}))
    ])
  ])
]

  
  
})
export class HeroListBasicComponent {
  @Input() heroes: Heroes;
}
