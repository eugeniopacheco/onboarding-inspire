import { IsNotEmpty, IsNumber } from "class-validator";

export class OrderItemDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}