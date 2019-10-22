import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('request interceptor called');

    const customRequest = req.clone({
      setHeaders: {
        CustomKey: 'AngularInterceptorAddedValue'
      }
    });

    return next.handle(customRequest);
  }

}
