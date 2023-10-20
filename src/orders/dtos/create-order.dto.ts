import { IsNotEmpty, ValidateNested } from "class-validator";
import { CreateInvoiceDto } from "./create-invoice.dto";
import { Type } from "class-transformer";

export class CreateOrderDto {
  @IsNotEmpty()
  @ValidateNested({ each: false })
  @Type(() => CreateInvoiceDto)
  invoice: CreateInvoiceDto;
}