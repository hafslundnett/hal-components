import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StatusMarkComponent } from './status-mark.component';
import { By } from '@angular/platform-browser';

fdescribe('StatusMarkComponent', () => {
  let fixture: ComponentFixture<StatusMarkComponent>;
  let component: StatusMarkComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatusMarkComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a i element, and default mark (true)', () => {
    expect(fixture.debugElement.nativeElement.querySelector('i')).not.toBeNull();
    expect(fixture.debugElement.queryAll(By.css('.check-icon')).length).toBe(1);
    expect(fixture.debugElement.queryAll(By.css('.x-icon')).length).toBe(0);
  });
  describe('setting status to true', () => {
    beforeEach(() => {
      component.status = true;
      fixture.detectChanges();
    });
    it('shows check mark', () => {
      expect(fixture.debugElement.nativeElement.querySelector('i')).not.toBeNull();
      expect(fixture.debugElement.queryAll(By.css('.check-icon')).length).toBe(1);
      expect(fixture.debugElement.queryAll(By.css('.x-icon')).length).toBe(0);
    });
  });
  describe('setting status to false', () => {
    beforeEach(() => {
      component.status = false;
      fixture.detectChanges();
    });
    it('shows x mark', () => {
      expect(fixture.debugElement.nativeElement.querySelector('i')).not.toBeNull();
      expect(fixture.debugElement.queryAll(By.css('.check-icon')).length).toBe(0);
      expect(fixture.debugElement.queryAll(By.css('.x-icon')).length).toBe(1);
    });
  });

  describe('setting status to false', () => {
    beforeEach(() => {
      component.status = false;
      fixture.detectChanges();
    });
    it('should display a i element with class x-icon, and default mark showBlankWhenFalse should be false', () => {
      expect(fixture.debugElement.queryAll(By.css('.x-icon')).length).toBe(1);
    });
    describe('setting showBlankWhenFalse to true', () => {
      beforeEach(() => {
        component.showBlankWhenFalse = true;
        fixture.detectChanges();
      });
      it('does not show x mark', () => {
        expect(fixture.debugElement.queryAll(By.css('.x-icon')).length).toBe(0);
      });
    });
    describe('setting showBlankWhenFalse to false', () => {
      beforeEach(() => {
        component.showBlankWhenFalse = false;
        fixture.detectChanges();
      });
      it('shows x mark', () => {
        expect(fixture.debugElement.queryAll(By.css('.x-icon')).length).toBe(1);
      });
    });
  });

});
