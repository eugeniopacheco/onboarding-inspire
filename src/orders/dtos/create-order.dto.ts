import { ArrayNotEmpty } from "class-validator";
import { OrderItemDto } from "./order-item.dto";

export class CreateOrderDto {
  @ArrayNotEmpty()
  items: OrderItemDto[];
}