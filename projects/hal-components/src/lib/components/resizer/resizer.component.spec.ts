import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizerComponent } from './resizer.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
  <div #testComp>
    You can resize me Vertically!
  </div>

  <hal-resizer
  [minHeight]="100"
  [maxHeigth]="400"
  [resizableElement]="testComp"
  [resizeDirection]="'vertical'"
  ></hal-resizer>
	`
})
class TestComponent {
  something = 'another ting';
}
describe('ResizerComponent (for horizontal)', () => {
  let component: ResizerComponent;
  let testComponent: TestComponent;
  let fixture: ComponentFixture<ResizerComponent>;
  let testFixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResizerComponent, TestComponent ]
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

/* Create element to be attached by the resizer 
  attach resizer
  start resizing
  check difference between before the resizing and after
*/


  describe('When resizing has occured on an element', () => {
    const initialCursorPosition = 500;
    const elementWidth = getSize('div');
    const newXPos = 900;
    // tslint:disable-next-line:one-variable-per-declaration

    beforeEach(() => {
      testFixture = TestBed.createComponent(TestComponent);
      testComponent = testFixture.componentInstance;
      component = fixture.debugElement.query(By.css('hal-resizer-vertical')).componentInstance;
      component.isResizing = true;
      component.elementWidth = elementWidth;
      component.initialCursorPosition = initialCursorPosition;
      component.startResize(new MouseEvent('mousemove', {
        clientX: newXPos
      }));
      component.onMouseUp();
    });

    it('a new width should be set on the resizable element', () => {
      expect(component.resizableElement.scrollWidth).toBe(900);
    });

    function getSize(selector: string) {
      return fixture.debugElement.nativeElement.querySelector(selector).scrollWidth;
    }
  });

  function getElement(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector);
  }
});

// describe('ResizerComponent (vertical)', () => {
//   let component: ResizerComponent;
//   let fixture: ComponentFixture<ResizerComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ResizerComponent]
//     })
//       .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ResizerComponent);
//     component = fixture.componentInstance;
//     component.resizeDirection = 'vertical';
//     component.resizableElement = document.createElement('div');
//     fixture.detectChanges();
//   });

//   it('should have an resizer element', () => {
//     expect(getElement('.resizer-vertical')).not.toBeNull();
//   });

//   it('should have an line element', () => {
//     const container: HTMLDivElement = getElement('.resizer-vertical');
//     expect(container.querySelector('.line')).not.toBeNull();
//   });

//   describe('When resizer is pressed', () => {
//     const clientX = 1234;

//     beforeEach(() => {
//       component.isResizing = false;
//       component.startResize(new MouseEvent('mousedown', {
//         clientX
//       }));
//     });

//     it('the resizing flag should be set', () => {
//       expect(component.isResizing).toBe(true);
//     });

//     xit('the mouse X position should be stored', () => {
//       expect(component.initialCursorPosition).toBe(clientX);
//     });
//   });

//   describe('When the mouse is released', () => {
//     beforeEach(() => {
//       component.isResizing = true;
//       component.onMouseUp();
//     });

//     it('the resizing flag should be set', () => {
//       expect(component.isResizing).toBe(false);
//     });
//   });

//   describe('When resizing has occured', () => {
//     const initialCursorPosition = 1000;
//     const newXPos = 1200;
//     const elementWidth = 500;

//     beforeEach(() => {
//       component.isResizing = true;
//       component.elementWidth = elementWidth;
//       component.initialCursorPosition = initialCursorPosition;
//       component.onResize(new MouseEvent('mousemove', {
//         clientX: newXPos
//       }));
//     });

//     xit('a new width should be set on the resizable element', () => {
//       expect(component.resizableElement.style.width).toBe('700px');
//     });
//   });

//   function getElement(selector: string) {
//     return fixture.debugElement.nativeElement.querySelector(selector);
//   }
// });
