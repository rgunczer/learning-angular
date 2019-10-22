import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('response interceptor called');

    return next.handle(req)
      .pipe(
        map(
          (event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              event = event.clone({ body: this.modifyBody(event.body)});
            }
            return event;
          }
        )
      );
  }

  modifyBody(body: any): any {
    console.log('modify body: ', body);

    const newBody = {
      ...body,
      Id: body.id
    };
    delete newBody.id;

    console.log('new body: ', newBody);
    return newBody;
  }

}
