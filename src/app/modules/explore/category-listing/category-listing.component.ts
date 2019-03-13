import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.scss'],
})
export class CategoryListingComponent implements OnInit {

  category = {
    name: 'Category Name'
  };

  constructor() { }

  ngOnInit() {}

}
