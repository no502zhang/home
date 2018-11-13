import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { GoodsRoutingModule } from './goods-routing.module';

import { GoodsListComponent } from './goods-list/goods-list.component';

@NgModule({
  imports: [
    SharedModule,
    GoodsRoutingModule
  ],
  exports: [GoodsListComponent],
  declarations: [GoodsListComponent]
})
export class GoodsModule { }
