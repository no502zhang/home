import { GoodsRoutingModule } from './goods-routing.module';

describe('GoodsRoutingModule', () => {
  let goodsRoutingModule: GoodsRoutingModule;

  beforeEach(() => {
    goodsRoutingModule = new GoodsRoutingModule();
  });

  it('should create an instance', () => {
    expect(goodsRoutingModule).toBeTruthy();
  });
});
