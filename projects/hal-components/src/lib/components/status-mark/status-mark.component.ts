import { Component, Input } from '@angular/core';

@Component({
  selector: 'hal-status-mark',
  templateUrl: './status-mark.component.html',
  styleUrls: ['./status-mark.component.scss']
})
export class StatusMarkComponent {
  @Input() status = true;

  /** Do not show red cross for FALSE value, only green check for TRUE value */
  @Input() showBlankWhenFalse = false;
}
