import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersModule } from './orders/orders.module';
import { OrderEntity } from './orders/entities/order.entity';
import { InvoiceEntity } from './orders/entities/invoice.entity';
import { ItemEntity } from './orders/entities/item.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 8081,
    username: 'postgres',
    password: 'postgres',
    database: 'onboarding',
    entities: [OrderEntity, InvoiceEntity, ItemEntity],
    synchronize: false,
  }), OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
