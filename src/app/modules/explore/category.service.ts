import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, flatMap, take, toArray } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CategoryService {

  constructor (private _http: HttpClient,
  ) { }

  findOne (id: number) {
    return this.base().pipe(
      flatMap(x => x),
      first(item => item.id === id)
    );
  }

  get (limit = 5) {
    return this.base()
      .pipe(
        flatMap(x => x),
        take(5),
        toArray(),
      );
  }

  private base () {
    return this._http.get<any[]>('/assets/db/categories.json');
  }

}
