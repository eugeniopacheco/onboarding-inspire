import { ArrayNotEmpty } from "class-validator";
import { CreateItemDto } from "./create-item.dto";

export class CreateInvoiceDto {
  @ArrayNotEmpty()
  items: CreateItemDto[];
}