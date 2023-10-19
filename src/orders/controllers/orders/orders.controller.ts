import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateOrderDto } from 'src/orders/dtos/create-order.dto';
import { OrdersService } from 'src/orders/services/orders/orders.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private orderService: OrdersService
  ) {}
  @Get()
  getUsers() {
    return this.orderService.findOrders();
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.findOrderById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }
}
