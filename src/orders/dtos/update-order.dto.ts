import { IsNotEmpty } from "class-validator";
import { UpdateInvoiceDto } from "./update-invoice.dto";

export class UpdateOrderDto {
  @IsNotEmpty()
  invoice: UpdateInvoiceDto;
}