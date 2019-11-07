import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';

import { UserMenuComponent } from './user-menu.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserMenuComponent', () => {
  let component: UserMenuComponent;
  let fixture: ComponentFixture<UserMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMenuComponent ],
      imports: [
        MatMenuModule,
        RouterTestingModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be initiated with an empty user object', () => {
    expect(component.user).toBeTruthy();
  });

  // TODO when images are back
  xdescribe('thumbnailUrl', () => {
    it('should generate a complete path to the thumbnail image', () => {
      // Arrange
      const fileType = 'a';
      const encodingType = 'b';
      const data = 'c';
      component.user = {
        name: '',
        email: '',
        thumbnail: {
          fileType,
          encodingType,
          data
        }
      };

      // Act
      const result = component.thumbnailUrl;

      // Assert
      expect(result).toBe(`data:image/${fileType};${encodingType},${data}`);
    });

    it('should return null if user is null', () => {
      // Arrange
      component.user = { email: '', name: '', thumbnail: undefined};

      // Act
      const result = component.thumbnailUrl;

      // Assert
      expect(result).toBeNull();
    });

    it('should return null if thumbnail is null', () => {
      // Arrange
      component.user = {
        name: '',
        email: '',
        thumbnail: undefined
      };

      // Act
      const result = component.thumbnailUrl;

      // Assert
      expect(result).toBeNull();
    });
  });

  // describe('signOut', () => {
  //   it('should use authService to sign out', inject([OidcSecurityService], (auth: OidcSecurityService) => {
  //     // Arrange
  //     spyOn(auth, 'logoff');

  //     // Act
  //     component.signOut();

  //     // Assert
  //     expect(auth.logoff).toHaveBeenCalled();
  //   }));
  // });

  describe('cancelMouseEventBubble', () => {
    it('should set cancelBubble flag on mouse event parameter', () => {
      // Arrange
      const cancelable = false;
      const event = new MouseEvent('click', { cancelable });
      expect(event.cancelBubble).toBe(cancelable);

      // Act
      component.cancelMouseEventBubble(event);

      // Assert
      expect(event.cancelBubble).toBe(true);
    });
  });

  // breaking sometimes in GUI test mode. diabled untill fixed
  xdescribe('When the user button receives focus', () => {
    let userButton: HTMLButtonElement;

    beforeEach(() => {
      userButton = getElement('.user-button');
      userButton.focus();
      fixture.detectChanges();
    });

    it('the overlay should receive a focus class', () => {
      const overlay: HTMLElement = userButton.querySelector('.overlay') as HTMLElement;
      expect(overlay.classList.toString()).toContain('focus');
    });
  });

  function getElement(selector: string) {
    return fixture.debugElement.nativeElement.querySelector(selector);
  }
});
