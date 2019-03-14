import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@app/modules/explore/category.service';
import { ItemService } from '@app/modules/explore/item.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    this.categoryService.findOne(this.categoryId).subscribe(category => {
      this.category = category;
    });

    this.itemService.findByCategory(this.categoryId).subscribe(items => {
      this.items = items;
    });

  }

  get categoryId () {
    return parseInt(this.route.snapshot.params.categoryId, 10);
  }
}
