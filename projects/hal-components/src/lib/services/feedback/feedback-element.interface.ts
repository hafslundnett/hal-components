import { FeedbackExtras } from './feedback-extras';

export interface FeedbackElement {
    message: string;
    extras: FeedbackExtras;
    id: number;
}
