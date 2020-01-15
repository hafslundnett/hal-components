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
    transition('void => visible', animate('500ms cubic-bezier(0.16, 0.52, 0.63, 0.88)')),

    state(
        'visible',
        style({
            transform: 'translateX(0) scale(1)',
            height: '*',
            opacity: 1,
        })
    ),
    transition('visible => void', animate(`500ms cubic-bezier(0, 0, 0.58, 1)`))
]);
