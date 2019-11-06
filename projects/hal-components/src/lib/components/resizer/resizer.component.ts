import { Component, HostListener, Input } from '@angular/core';

type direction = 'vertical' | 'horizontal';

@Component({
  selector: 'hal-resizer',
  templateUrl: './resizer.component.html',
  styleUrls: ['./resizer.component.scss']
})
export class ResizerComponent {
  @Input() resizableElement: HTMLElement;
  @Input() resizeDirection: direction; // set outside, and remove default
  @Input() minHeight?: number = 300;
  @Input() maxHeigth?: number = 850;
  @Input() minWidth?: number = 20;
  @Input() maxWidth?: number = 80;

  isResizing = false;
  elementWidth: number;
  elementHeight: number;
  initialCursorPosition: number;

  @HostListener('document:mousemove', ['$event'])
  onResize(event: MouseEvent) {
    if (!this.isResizing) {
      return;
    }

    if (this.resizeDirection === 'vertical') {
      const diff = event.clientX - this.initialCursorPosition;
      const width = `${this.elementWidth + diff}px`;
      this.resizableElement.style.flex = `0 0 ${width}`;
      this.resizableElement.style.width = width;
      this.resizableElement.style.maxWidth = this.maxWidth + '%';
      this.resizableElement.style.minWidth = this.minWidth + '%';
    } else if (this.resizeDirection === 'horizontal') {
      const min = this.minHeight;
      const max = this.maxHeigth;

      const diff = event.clientY - this.initialCursorPosition;
      const newHeight = this.elementHeight + diff;
      const height = `${newHeight}px`;
      if (newHeight < min) {
        this.resizableElement.style.height = `${min}px`;
      } else if (newHeight > max) {
        this.resizableElement.style.height = `${max}px`;
      } else {
        this.resizableElement.style.height = height;
      }
    }

  }

  @HostListener('document:mouseup', [])
  onMouseUp() {
    this.isResizing = false;
  }

  startResize(mouseEvent: MouseEvent): void {
    if (this.resizeDirection === 'vertical') {
      this.elementWidth = this.resizableElement.clientWidth;
      this.isResizing = true;
      this.initialCursorPosition = mouseEvent.clientX;
    } else if (this.resizeDirection === 'horizontal') {
      this.elementHeight = this.resizableElement.clientHeight;
      this.isResizing = true;
      this.initialCursorPosition = mouseEvent.clientY;
    }
  }
}
