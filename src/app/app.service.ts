import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { debounceTime,distinctUntilChanged,switchMap,map } from 'rxjs/operators';

@Injectable()
export class AppService {
  baseUrl: string = 'https://www.deksuan.com/api/search/';
  queryUrl: string = '?q=';

  constructor(private http: Http) { }

  search(terms: Observable<string>) {
    return terms
    .pipe(debounceTime(500))
    .pipe(distinctUntilChanged())
    .pipe(switchMap(term => this.searchAPI(term)))
  }

  searchAPI(term) {
    return this.http
      .get(this.baseUrl + this.queryUrl + term)
      .pipe(map(res => res.json()))
  }
}