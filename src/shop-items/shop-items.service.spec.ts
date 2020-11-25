import { Test, TestingModule } from '@nestjs/testing';
import { ShopItemsService } from './shop-items.service';

describe('ShopItemsService', () => {
  let service: ShopItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShopItemsService],
    }).compile();

    service = module.get<ShopItemsService>(ShopItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
