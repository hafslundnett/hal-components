import { InjectionToken } from '@angular/core';

/** Injection token that can be used to access the data that was passed in to a dialog. */
export const POPUP_GLOBAL_DATA = new InjectionToken<{}>('PopupGlobalData');
