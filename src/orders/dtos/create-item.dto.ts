import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateItemDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}