export interface FeedbackExtras {
  severity?: 'success' | 'error' | 'primary' | 'warn';
  closable?: boolean;
  duration: number;
}
