import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, flatMap, map } from 'rxjs/operators';
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

  findOne (id: number) {
    return this.base().pipe().pipe(
      flatMap(x => x),
      first(item => item.id === id)
    );
  }

  private base () {
    return this._http.get<any[]>('/assets/db/items.json');
  }
}
