import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '@app/modules/explore/item.service';

@Component({
  selector: 'app-explore-list',
  templateUrl: './explore-list.component.html',
  styleUrls: ['./explore-list.component.scss'],
})
export class ExploreListComponent implements OnInit {

  @Input() name = '';
  @Input() from = '';

  _items = [];

  constructor (private itemService: ItemService) { }

  ngOnInit () {
    this.itemService.shortListOf(this.name)
      .subscribe(items => this._items = items);
  }

}
