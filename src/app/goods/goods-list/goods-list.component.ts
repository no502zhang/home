import { Component, OnInit } from '@angular/core';

import { Goods } from '../shared/goods.model';
import { GoodsService } from '../shared/goods.service';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {
  goodsList: Goods[] = [];
  index = 1;

  constructor(private goodsService: GoodsService) { }

  ngOnInit() {
    this.getGoodsList();
  }

  getGoodsList() {
    this.goodsService.getGoodsList(this.index, 10).subscribe(page => {
      this.goodsList = page.list;
      this.index = page.pageNum;
    })
  }
}
