import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderParams } from 'src/orders/types/create-order.type';
import { OrderEntity } from '../../entities/order.entity';
import { DataSource, Repository } from 'typeorm';
import { InvoiceEntity } from 'src/orders/entities/invoice.entity';
import { ItemEntity } from 'src/orders/entities/item.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrderEntity)
    private orderRepository: Repository<OrderEntity>,
    private dataSource: DataSource,
  ) {}

  findOrders() {
    return this.orderRepository.find({
      relations: {
        invoices: {
          items: true,
        },
      },
    });
  }

  async findOrderById(id: number) {
    const order = await this.orderRepository.findOneBy({ id });
    if (!order) {
      throw new HttpException(
        'Order found. Cannot find order with id: ' + id,
        HttpStatus.BAD_REQUEST,
      );
    }
    return order;
  }

  async createOrder(orderDetails: CreateOrderParams) {
    await this.dataSource.transaction(async (transactionalEntityManager) => {
      const order = await transactionalEntityManager.save(OrderEntity, {
        created_date: new Date(),
      });
      const invoice = await transactionalEntityManager.save(InvoiceEntity, {
        created_date: new Date(),
        order,
      });
      const items = orderDetails.items.map(async (item) => {
        console.log('item: ', item);
        await transactionalEntityManager.save(ItemEntity, {
          created_date: new Date(),
          invoice,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        });
      });
    });
    console.log("Added order, invoice and items successfully");
    return { message: 'Added order, invoice and items successfully' };
  }
}
