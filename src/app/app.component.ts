import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { trigger, transition, query, style, animate } from '@angular/animations';
import { RouterOutlet } from '@angular/router';
/* import { slideInAnimation } from './route-animation'; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)',
        })
      ]
      , { optional: true }
      ),

      // Animate the new page in
      query(':enter', [
        animate('900ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ],{optional:true})
    ]),
])
  ]
})


export class AppComponent {
  title = 'Toastettes';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

constructor(private breakpointObserver: BreakpointObserver) {}



prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
}

}