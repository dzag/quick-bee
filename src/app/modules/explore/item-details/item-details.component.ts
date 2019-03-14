import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ItemService } from '@app/modules/explore/item.service';
import { ActivatedRoute } from '@angular/router';
import { take } from 'lodash';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {

  @ViewChild('background', { read: ElementRef }) backgroundEl: ElementRef;

  item: any;

  shortDesc = '';
  expanded = false;

  Array = Array;

  constructor (private itemService: ItemService,
               private route: ActivatedRoute,
               private renderer: Renderer2,
  ) { }

  ngOnInit () {
    this.itemService.findOne(this.id)
      .subscribe(item => {
        this.item = item;
        this.shortDesc = take(item.description.split('.'), 3).join('.');
        this.renderer.setStyle(
          this.backgroundEl.nativeElement,
          'background-image',
          `url(/assets/google-headquarter.jpg)`
        );
      });
  }

  get id () {
    return +this.route.snapshot.params.id;
  }

  get categoryId () {
    return +this.route.snapshot.params.categoryId;
  }

}
