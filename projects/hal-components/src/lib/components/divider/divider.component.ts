import { Component, Input } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'hal-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent {
  @Input()
  get light(): boolean {
    return this._light;
  }
  set light(light: boolean) {
    this._light = coerceBooleanProperty(light);
  }
  private _light = false;
}
