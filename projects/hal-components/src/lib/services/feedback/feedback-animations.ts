import { trigger, state, style, transition, animate, AnimationTriggerMetadata } from '@angular/animations';

export const feedbackAnimation: AnimationTriggerMetadata = trigger('feedbackAnimation', [
    state(
        'void',
        style({
            transform: 'translateX(150px) scale(0.7)',
            height: 0,
            opacity: 0
        })
    ),
    state(
        'visible',
        style({
            transform: 'translateX(0) scale(1)',
            height: '*',
            opacity: 1,
        })
    ),
    transition('visible <=> void', animate(`600ms cubic-bezier(0.6, 0, 0.1, 1)`))
]);
