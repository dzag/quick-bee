import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '@app/modules/explore/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-explore-list',
  templateUrl: './explore-list.component.html',
  styleUrls: ['./explore-list.component.scss'],
})
export class ExploreListComponent implements OnInit {

  @Input() name = '';
  @Input() from = '';

  _items = [];

  constructor (private itemService: ItemService,
               private router: Router,
               private route: ActivatedRoute,
               private navController: NavController,
  ) { }

  ngOnInit () {
    this.itemService.shortListOf(this.name)
      .subscribe(items => this._items = items);
  }

  showDetails (item: any) {
    this.navController.navigateForward(`/app/explore/${item.categoryId}/${item.id}`);
  }
}
