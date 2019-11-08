import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizerComponent } from './resizer.component';

describe('ResizerComponent (for vertical)', () => {
  let component: ResizerComponent;
  let fixture: ComponentFixture<ResizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizerComponent);
    component = fixture.componentInstance;
    component.resizeDirection = 'vertical';
    component.resizableElement = document.createElement('div');
    fixture.detectChanges();
  });

  it('should have an resizer element', () => {
    expect(getElement('.resizer-vertical')).not.toBeNull();
  });

  it('should have an line element', () => {
    const container: HTMLDivElement = getElement('.resizer-vertical');
    expect(container.querySelector('.line')).not.toBeNull();
  });

  describe('When resizer is pressed', () => {
    const clientX = 1234;

    beforeEach(() => {
      component.isResizing = false;
      component.startResize(new MouseEvent('mousedown', {
        clientX
      }));
    });

    it('the resizing flag should be set', () => {
      expect(component.isResizing).toBe(true);
    });

    xit('the mouse X position should be stored', () => {
      expect(component.initialCursorPosition).toBe(clientX);
    });
  });

  describe('When the mouse is released', () => {
    beforeEach(() => {
      component.isResizing = true;
      component.onMouseUp();
    });

    it('the resizing flag should be set', () => {
      expect(component.isResizing).toBe(false);
    });
  });

  describe('When resizing has occured', () => {
    const initialCursorPosition = 1000;
    const newXPos = 1200;
    const elementWidth = 500;

    beforeEach(() => {
      component.isResizing = true;
      component.elementWidth = elementWidth;
      component.initialCursorPosition = initialCursorPosition;
      component.onResize(new MouseEvent('mousemove', {
        clientX: newXPos
      }));
    });

    xit('a new width should be set on the resizable element', () => {
      expect(component.resizableElement.style.width).toBe('700px');
    });
  });

  function getElement(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector);
  }
});
