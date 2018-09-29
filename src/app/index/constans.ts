import { HttpHeaders } from '@angular/common/http';
import {
    trigger,
    state,
    style,
    transition,
    animate,
    keyframes,
} from '@angular/animations';



export const API_URL = "/api/gaei";
export const HTTP_OPTIONS = {
    headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Basic bWFibzptYWJv",
    })
}


export const flyIn =  trigger('flyIn', [
    state('in', style({transform: 'translate(0)'})), // 默认平移0
    transition('void => *', [ // 进场动画
      animate(3000, keyframes([
        style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
        style({opacity: 1, transform: 'translateX(25px)',  offset: 0.3}),
        style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
      ]))
    ]),
    transition('* => void', [ // 离场动画
      animate(300, keyframes([
        style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
        style({opacity: 1, transform: 'translateX(-25px)', offset: 0.7}),
        style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
      ]))
    ])
]);

export const ControlsAnimation = trigger('ControlsAnimation', [
    state('up-show', style({top: '*'})),
    state('down-show', style({bottom: '10px'})),
    state('up-hidden', style({'top': '-32px'})),
    state('down-hidden', style({'bottom': '-48px'})),
    transition('up-show <=> up-hidden', [
        animate('1000ms ease'),
    ]),
    transition('down-show <=> down-hidden', [
        animate('1000ms ease'),
    ]),
]);


export const ImageAnimation = trigger('ImageAnimation', [
    state('show-1th', style({'left': "0"})),
    state('show-2th', style({'left': "-100%"})),
    state('show-3th', style({'left': "-200%"})),
    transition('show-1th => show-2th', [animate('1000ms ease')]),
    transition('show-2th => show-3th', [animate('1000ms ease')]),
    transition('show-3th => show-1th', [animate('1000ms ease')]),
])