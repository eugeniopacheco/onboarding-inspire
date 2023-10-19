import { OrderItemDto } from "../dtos/order-item.dto";

export type CreateOrderParams = {
  items: OrderItemDto[];
}