import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizerComponent } from './resizer.component';

describe('ResizerComponent (for horizontal resizing)', () => {
  let component: ResizerComponent;
  let fixture: ComponentFixture<ResizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResizerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizerComponent);
    component = fixture.componentInstance;
    component.resizeDirection = 'horizontal';
    component.resizableElement = document.createElement('div');
    fixture.detectChanges();
  });

  it('should have a horizontal resizer element', () => {
    expect(getElement('.resizer-horizontal')).not.toBeNull();
  });

  it('should have an line element', () => {
    const container: HTMLDivElement = getElement('.resizer-horizontal');
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

    it('the mouse X position should be stored', () => {
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

  describe('When horizontal resizing has occured on an element', () => {
    const initialCursorPosition = 100;
    const elementWidth = 100;
    const newXPos = 500;

    beforeEach(() => {
      const testHtmlElement = document.createElement('div');
      testHtmlElement.style.width = '100px';
      component.resizableElement = testHtmlElement;
      component.initialCursorPosition = initialCursorPosition;
      component.elementWidth = elementWidth;
      component.isResizing = true;
      component.onResize(new MouseEvent('mousemove', {
        clientX: newXPos
      }));
    });

    it('a new width should be set on the resizable element', () => {
      expect(component.resizableElement.style.width).toBe('500px');
    });
  });

  function getElement(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector);
  }
});

// ------------- Tests for vertical resizing ------------------------

describe('ResizerComponent (for vertical resizing)', () => {
  let component: ResizerComponent;
  let fixture: ComponentFixture<ResizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResizerComponent]
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
    const clientY = 1234;

    beforeEach(() => {
      component.isResizing = false;
      component.startResize(new MouseEvent('mousedown', {
        clientY
      }));
    });

    it('the resizing flag should be set', () => {
      expect(component.isResizing).toBe(true);
    });

    it('the mouse Y position should be stored', () => {
      expect(component.initialCursorPosition).toBe(clientY);
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

  describe('When vertical resizing has occured on an element', () => {
    const initialCursorPosition = 300;
    const elementHeight = 300;
    const newYPos = 500;

    beforeEach(() => {
      const testHtmlElement = document.createElement('div');
      testHtmlElement.style.height = '100px';
      component.resizableElement = testHtmlElement;
      component.initialCursorPosition = initialCursorPosition;
      component.elementHeight = elementHeight;
      component.isResizing = true;
      component.onResize(new MouseEvent('mousemove', {
        clientY: newYPos
      }));
    });

    it('a new width should be set on the resizable element', () => {
      expect(component.resizableElement.style.height).toBe('500px');
    });
  });

  function getElement(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector);
  }
});
