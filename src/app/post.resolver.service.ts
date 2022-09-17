import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class PostsResolver implements Resolve<any>{
  constructor(private http: HttpClient) {
  }

  resolve(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
      map(res =>console.log(res))
    )
  }
}
