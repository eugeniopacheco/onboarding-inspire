import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderParams } from 'src/orders/types/order.type';
import { OrderEntity } from '../../entities/order.entity';
import { DataSource, Repository, TransactionAlreadyStartedError } from 'typeorm';
import { InvoiceEntity } from 'src/orders/entities/invoice.entity';
import { ItemEntity } from 'src/orders/entities/item.entity';
import { CreateOrderDto } from 'src/orders/dtos/create-order.dto';
import { UpdateOrderDto } from 'src/orders/dtos/update-order.dto';

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
        invoice: {
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

  async createOrder(orderDetails: CreateOrderDto) {
    // await this.dataSource.transaction(async (transactionalEntityManager) => {
    //   const order = await transactionalEntityManager.save(OrderEntity, {
    //     created_date: new Date(),
    //   });
    //   const invoice = await transactionalEntityManager.save(InvoiceEntity, {
    //     created_date: new Date(),
    //     order,
    //   });
    //   const items = orderDetails.items.map(async (item) => {
    //     console.log('item: ', item);
    //     await transactionalEntityManager.save(ItemEntity, {
    //       created_date: new Date(),
    //       invoice,
    //       name: item.name,
    //       price: item.price,
    //       quantity: item.quantity,
    //     });
    //   });
    // });
    // console.log("Added order, invoice and items successfully");
    // return { message: 'Added order, invoice and items successfully' };
    const order = {
      createdDate: new Date(),
      invoice: {
        createdDate: new Date(),
        items: orderDetails.invoice.items.map((item) => ({
          createdDate: new Date(),
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
      }
    }
    const newOrder = this.orderRepository.create(order);
    console.log(newOrder);
    return this.orderRepository.save(newOrder);
  }

  async updateOrderById(id: number, orderDetails: UpdateOrderDto) {
    const order = await this.orderRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        invoice: {
          items: true,
        },
      },
    });
    if (!order) {
      throw new HttpException(
        'Order found. Cannot find order with id: ' + id,
        HttpStatus.BAD_REQUEST,
      );
    // } else {
    //   console.log('order', order);
    //   console.log('invoice', order.invoice);
    //   console.log('items', order.invoice.items);
    }
    order.updatedDate = new Date();
    order.invoice.updatedDate = new Date();
    order.invoice.items = orderDetails.invoice.items.map((item) => ({
      id: item.id,
      updatedDate: item.id && new Date(),
      name: item.name,
      price: item.price,
      quantity: item.quantity
    }));
    return this.orderRepository.save(order);
  }

  async deleteOrderById(id: number) {
    const order = await this.orderRepository.findOne({
      where: {
        id: id,
      },
      relations: {
        invoice: {
          items: true,
        },
      },
    });
    if (!order) {
      throw new HttpException(
        'Order found. Cannot find order with id: ' + id,
        HttpStatus.BAD_REQUEST,
      );
    }
    order.deletedDate = new Date();
    order.invoice.deletedDate = new Date();
    order.invoice.items = order.invoice.items.map((item) => ({
      id: item.id,
      deletedDate: new Date(),
      name: item.name,
      price: item.price,
      quantity: item.quantity
    }));
    return this.orderRepository.save(order);
  }

}
