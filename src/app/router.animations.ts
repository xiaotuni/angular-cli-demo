import { trigger, state, animate, style, transition } from '@angular/animations';
// import { Utility } from './Common/Utility';

export function routerTransition(__AppIsGoBack: Boolean) {
  console.log('routerTransition');
  // let __AppIsGoBack = false;
  // if (Utility) {
  //   __AppIsGoBack = Utility.$GetContent(Utility.$ConstItem.AppIsGoBack);
  // }
  return !!__AppIsGoBack ? slideToRight() : slideToLeft();
}
export function routerTransition1(__AppIsGoBack: Boolean) {
  console.log('routerTransition1');
  return !!__AppIsGoBack ? slideToRight() : slideToLeft();
}

function slideToRight() {
  return trigger('routerTransition', [
    state('void', style({ position: 'fixed', width: '100%', left: '0px' })),
    state('*', style({ position: 'fixed', width: '100%', left: '0px' })),
    transition(':enter', [
      style({ transform: 'translateX(-100%)' }),
      animate('11.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('11.5s ease-in-out', style({ transform: 'translateX(100%)' }))
    ])
  ]);
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({ position: 'fixed', width: '100%', left: '0px' })),
    state('*', style({ position: 'fixed', width: '100%', left: '0px' })),
    transition(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ])
  ]);
}

function slideToBottom() {
  return trigger('routerTransition', [
    state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
    state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
    transition(':enter', [
      style({ transform: 'translateY(-100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateY(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
    ])
  ]);
}

function slideToTop() {
  return trigger('routerTransition', [
    state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
    state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
    transition(':enter', [
      style({ transform: 'translateY(100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateY(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
    ])
  ]);
}