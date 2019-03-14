import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, first, flatMap, map, toArray } from 'rxjs/operators';
import { randomArray } from '@core/utils';

@Injectable({ providedIn: 'root' })
export class ItemService {

  constructor (private _http: HttpClient,
  ) { }

  shortListOf (name) {
    return this.base().pipe(
      map(items => randomArray(items))
    );
  }

  findByType(type) {
    return this.base().pipe(
      map(items => randomArray(items, 15))
    );
  }

  findOne (id: number) {
    return this.base().pipe(
      flatMap(x => x),
      first(item => item.id === id)
    );
  }

  findByCategory (categoryId: number) {
    return this.base().pipe(
      flatMap(x => x),
      filter(item => item.categoryId === categoryId),
      toArray(),
    );
  }

  private base () {
    return this._http.get<any[]>('/assets/db/items.json');
  }

}
