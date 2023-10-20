import { ArrayNotEmpty, IsNumber } from "class-validator";
import { UpdateItemDto } from "./update-item.dto";

export class UpdateInvoiceDto {
  @IsNumber()
  id: number;

  @ArrayNotEmpty()
  items: UpdateItemDto[];
}