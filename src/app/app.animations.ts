import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

const speed: string = '600ms';

export const routeAnimation: AnimationEntryMetadata = [

    trigger('routing', [
        // state('*', style({ transform: 'translateX(0)' })),
        // transition('void => backward', [style({ transform: 'translateX(-100%' }), animate(speed)]),
        // transition('backward => void', [animate(speed, style({ transform: 'translateX(100%)' }))]),
        // transition('void => forward', [style({ transform: 'translateX(100%' }), animate(speed)]),
        // transition('forward => void', [animate(speed, style({ transform: 'translateX(-100%)' })),

        // state('void', style({ position: 'fixed', width: '100%', left: '0px' })),
        // state('*', style({ position: 'fixed', width: '100%', left: '0px' })),
        // transition('void => backward', [style({ transform: 'translateX(-100%' }), animate(speed)]),
        // transition('backward => void', [animate(speed, style({ transform: 'translateX(100%)' }))]),

        // transition('void => forward', [style({ transform: 'translateX(100%' }), animate(speed)]),
        // transition('forward => void', [animate(speed, style({ transform: 'translateX(-100%)' }))


        state('void', style({ position: 'fixed', width: '100%', left: '0px' })),
        state('*', style({ position: 'fixed', width: '100%', left: '0px' })),
        // 上一页
        transition('void => backward', [style({ transform: 'translateX(-100%)' }), animate('0.6s ease-in-out', style({ transform: 'translateX(0%)' }))]),
        transition('backward => void', [style({ transform: 'translateX(0%)' }), animate('0.6s ease-in-out', style({ transform: 'translateX(100%)' }))]),
        // 下一页
        transition('void => forward', [style({ transform: 'translateX(100%)' }), animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))]),
        transition('forward => void', [style({ transform: 'translateX(0%)' }), animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))])
    ])
]

export function ToRight() {
    return trigger('routerTransition', [
        state('void', style({ position: 'fixed', width: '100%', left: '0px' })),
        state('*', style({ position: 'fixed', width: '100%', left: '0px' })),
        transition(':enter', [style({ transform: 'translateX(-100%)' }), animate('11.5s ease-in-out', style({ transform: 'translateX(0%)' }))]),
        transition(':leave', [style({ transform: 'translateX(0%)' }), animate('11.5s ease-in-out', style({ transform: 'translateX(100%)' }))])
    ]);
}




// import { trigger, state, animate, style, transition } from '@angular/animations';
// // import { Utility } from './Common/Utility';

// export function routerTransition(__AppIsGoBack: Boolean) {
//   console.log('routerTransition');
//   // let __AppIsGoBack = false;
//   // if (Utility) {
//   //   __AppIsGoBack = Utility.$GetContent(Utility.$ConstItem.AppIsGoBack);
//   // }
//   return !!__AppIsGoBack ? slideToRight() : slideToLeft();
// }
// export function routerTransition1(__AppIsGoBack: Boolean) {
//   console.log('routerTransition1');
//   return !!__AppIsGoBack ? slideToRight() : slideToLeft();
// }

// function slideToRight() {
//   return trigger('routerTransition', [
//     state('void', style({ position: 'fixed', width: '100%', left: '0px' })),
//     state('*', style({ position: 'fixed', width: '100%', left: '0px' })),
//     transition(':enter', [
//       style({ transform: 'translateX(-100%)' }),
//       animate('11.5s ease-in-out', style({ transform: 'translateX(0%)' }))
//     ]),
//     transition(':leave', [
//       style({ transform: 'translateX(0%)' }),
//       animate('11.5s ease-in-out', style({ transform: 'translateX(100%)' }))
//     ])
//   ]);
// }

// function slideToLeft() {
//   return trigger('routerTransition', [
//     state('void', style({ position: 'fixed', width: '100%', left: '0px' })),
//     state('*', style({ position: 'fixed', width: '100%', left: '0px' })),
//     transition(':enter', [
//       style({ transform: 'translateX(100%)' }),
//       animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
//     ]),
//     transition(':leave', [
//       style({ transform: 'translateX(0%)' }),
//       animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
//     ])
//   ]);
// }

// function slideToBottom() {
//   return trigger('routerTransition', [
//     state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
//     state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
//     transition(':enter', [
//       style({ transform: 'translateY(-100%)' }),
//       animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
//     ]),
//     transition(':leave', [
//       style({ transform: 'translateY(0%)' }),
//       animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))
//     ])
//   ]);
// }

// function slideToTop() {
//   return trigger('routerTransition', [
//     state('void', style({ position: 'fixed', width: '100%', height: '100%' })),
//     state('*', style({ position: 'fixed', width: '100%', height: '100%' })),
//     transition(':enter', [
//       style({ transform: 'translateY(100%)' }),
//       animate('0.5s ease-in-out', style({ transform: 'translateY(0%)' }))
//     ]),
//     transition(':leave', [
//       style({ transform: 'translateY(0%)' }),
//       animate('0.5s ease-in-out', style({ transform: 'translateY(-100%)' }))
//     ])
//   ]);
// }