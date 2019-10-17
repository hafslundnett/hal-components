import { Component, OnInit, Injector, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './user.interface';

@Component({
  selector: 'hal-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit, OnDestroy {
  @Input() user: User = { email: null, name: null, thumbnail: null};
  @Input() settingsPagePath = 'settings';

  initials: string;
  hasFocus = false;

  // TODO
  get thumbnailUrl(): string {
    // if (this.user && this.user.thumbnail) {
    //   const thumb = this.user.thumbnail;
    //   return `data:image/${thumb.fileType};${thumb.encodingType},${thumb.data}`;
    // }
    return null;
  }
  // private oidcSecurityService: OidcSecurityService;
  private subscriptions: Subscription = new Subscription();

  constructor(private injector: Injector) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  signOut() {
    // this.oidcSecurityService.logoff();
  }

  cancelMouseEventBubble(e: MouseEvent) {
    e.cancelBubble = true;
  }

  // getInitials(user: User): string {
  //   let initials = '';

  //   if (user && user.name) {
  //     const nameParts = user.name.split(' ');
  //     nameParts.forEach(part => initials = initials + part.substring(0, 1));
  //   }

  //   return initials;
  // }
}
