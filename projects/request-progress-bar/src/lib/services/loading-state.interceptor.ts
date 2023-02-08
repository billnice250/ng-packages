import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { LoadingStateService } from './loading-state.service';

@Injectable()
export class LoadingStateInterceptor implements HttpInterceptor {

  constructor(    private _loading: LoadingStateService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._loading.setLoading(true, request.url);
    return next
      .handle(request)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this._loading.setLoading(false, request.url);
          }
          return event;
        }),
        catchError((error: any) => {
          this._loading.setLoading(false, request.url);
          throw error;
        })
      );
  }
}
