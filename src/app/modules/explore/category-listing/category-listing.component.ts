import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@app/modules/explore/category.service';
import { ItemService } from '@app/modules/explore/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.scss'],
})
export class CategoryListingComponent implements OnInit {

  category;

  items = [];

  constructor (private categoryService: CategoryService,
               private itemService: ItemService,
               private route: ActivatedRoute,
  ) { }

  ngOnInit () {
    if (this.categoryId) {
      this.categoryService.findOne(this.categoryId).subscribe(category => {
        this.category = category;
      });

      this.itemService.findByCategory(this.categoryId).subscribe(items => {
        this.items = items;
      });

    } else if (this.type) {

      this.itemService.findByType(this.type).subscribe(items => {
        this.items = items;
      });

    }
  }

  get categoryId () {
    return parseInt(this.route.snapshot.params.categoryId, 10);
  }

  get type() {
    return this.route.snapshot.queryParams.type;
  }

  get name() {
    return (this.category || {}).name || this.route.snapshot.queryParams.name;
  }

}
