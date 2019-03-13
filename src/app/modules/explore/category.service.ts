import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { flatMap, take, toArray } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CategoryService {

  constructor (private _http: HttpClient,
  ) { }

  get (limit = 5) {
    return this._http.get<any[]>('/assets/db/categories.json')
      .pipe(
        flatMap(x => x),
        take(5),
        toArray(),
      );
  }

}
