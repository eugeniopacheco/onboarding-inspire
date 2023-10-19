import { Module } from '@nestjs/common';
import { OrdersController } from './controllers/orders/orders.controller';
import { OrdersService } from './services/orders/orders.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderEntity } from './entities/order.entity';
import { ItemsService } from './services/items/items.service';
import { InvoiceEntity } from './entities/invoice.entity';
import { ItemEntity } from './entities/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, InvoiceEntity, ItemEntity])],
  controllers: [OrdersController],
  providers: [OrdersService, ItemsService]
})
export class OrdersModule {}
