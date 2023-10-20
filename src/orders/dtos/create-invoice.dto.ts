import { ArrayNotEmpty, ValidateNested } from "class-validator";
import { CreateItemDto } from "./create-item.dto";
import { Type } from "class-transformer";

export class CreateInvoiceDto {
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreateItemDto)
  items: CreateItemDto[];
}