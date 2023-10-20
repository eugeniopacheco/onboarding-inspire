import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateOrderDto } from 'src/orders/dtos/create-order.dto';
import { UpdateOrderDto } from 'src/orders/dtos/update-order.dto';
import { OrdersService } from 'src/orders/services/orders/orders.service';

@Controller('orders')
export class OrdersController {
  constructor(
    private orderService: OrdersService
  ) {}
  @Get()
  getOrders() {
    return this.orderService.findOrders();
  }

  @Get(':id')
  getOrderById(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.findOrderById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.orderService.createOrder(createOrderDto);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  updateOrderById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateOrderDto: UpdateOrderDto
  ) {
    return this.orderService.updateOrderById(id, updateOrderDto);
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe())
  deleteOrderById(@Param('id', ParseIntPipe) id: number) {
    return this.orderService.deleteOrderById(id);
  }
}
