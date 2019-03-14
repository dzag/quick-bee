import { Component, OnInit } from '@angular/core';
import { CategoryService } from '@app/modules/explore/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-main',
  templateUrl: './explore-main.component.html',
  styleUrls: ['./explore-main.component.scss'],
})
export class ExploreMainComponent implements OnInit {

  bigCat;
  rightTopCats = [];
  rightBotCats = [];

  constructor (private categoryService: CategoryService,
               private router: Router,
  ) { }

  ngOnInit () {
    this.categoryService.get().subscribe(categories => {
      this.bigCat = categories[0];
      this.rightTopCats = categories.slice(1, 3);
      this.rightBotCats = categories.slice(3, 5);
    });
  }

  showCategoryListing (category: any) {
    this.router.navigate(['/app/explore/', category.id]);
  }
}
