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
export class SvgService {

  public sharedSvgRequests: SharedSvgRequest[] = [];

  constructor(private http: HttpClient) { }

  // Not multithreding frendly, but JS is not, so no problem
  getSvgContent(path): Observable<any> {
    let request = this.getRequestFromCatch(path);

    if (!request) {
      request = this.http.get(path, { responseType: 'text' }).pipe(
        shareReplay(1)
      );
      this.sharedSvgRequests.push({
        path,
        observable: request,
      });
    }

    return request;
  }

  getRequestFromCatch(path): Observable<any> | null {
    const catchedEl = this.sharedSvgRequests
      .find((currentSvg) => path === currentSvg.path);
    if (catchedEl) {
      return catchedEl.observable;
    }
    return null;
  }

}
