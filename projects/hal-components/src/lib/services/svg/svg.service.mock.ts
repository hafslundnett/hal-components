import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, share, shareReplay } from 'rxjs/operators';

interface SharedSvgRequest {
  path: string;
  observable: Observable<any>;
}

@Injectable({
  providedIn: 'root'
})
export class SvgMockService {

  public sharedSvgRequests: SharedSvgRequest[] = [];

  constructor(private http: HttpClient) { }

  // Not multithreding frendly, but JS is not, so no problem
  getSvgContent(path): Observable<any> {
    return of(0);
  }

  getRequestFromCatch(path): Observable<any> | null {
  return null;
  }
}
