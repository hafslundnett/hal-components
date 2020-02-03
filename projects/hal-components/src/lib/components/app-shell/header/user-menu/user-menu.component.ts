import { Component, OnInit, Injector, OnDestroy, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'hal-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit, OnChanges, OnDestroy {
  @Input() user: User = { email: '', name: '', thumbnail: undefined };
  @Input() settingsPagePath = '';
  @Input() signOutPagePath = '';
  @Input() appListDomainUrl: string;

  initials: string;
  hasFocus = false;
  popupIsOpen = false;

  // TODO
  get thumbnailUrl(): string {
    // if (this.user && this.user.thumbnail) {
    //   const thumb = this.user.thumbnail;
    //   return `data:image/${thumb.fileType};${thumb.encodingType},${thumb.data}`;
    // }
    return '';
  }
  // private oidcSecurityService: OidcSecurityService;
  private subscriptions: Subscription = new Subscription();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.user) {
      this.initials = this.getInitials(this.user);
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  cancelMouseEventBubble(e: MouseEvent) {
    e.cancelBubble = true;
  }

  getInitials(user: User): string {
    let initials = '';

    if (user && user.name) {
      const nameParts = user.name.split(' ');
      nameParts.forEach(part => initials = initials + part.substring(0, 1));
    }

    return initials;
  }
}
