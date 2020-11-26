import { Module } from '@nestjs/common';
import { RestController } from './rest/rest.controller';
import { IndexController } from './index/index.controller';
import { CalendarService } from './calendar/calendar.service';
import { LogsService } from '@thefirstspine/logs-nest';
import { ShopItemsService } from './shop-items/shop-items.service';

@Module({
  imports: [],
  controllers: [RestController, IndexController],
  providers: [CalendarService, LogsService, ShopItemsService],
})
export class AppModule {}
