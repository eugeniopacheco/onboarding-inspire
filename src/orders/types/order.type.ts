export type CreateOrderParams = {
  invoice: CreateInvoiceParams;
}

export type CreateInvoiceParams = {
  items: CreateItemParams[];
}

export type CreateItemParams = {
  name: string;
  price: number;
  quantity: number;
}

export type UpdateOrderParams = {
  id: number;
  invoice: UpdateInvoiceParams;
}

export type UpdateInvoiceParams = {
  id: number;
  items: UpdateItemParams[];
}

export type UpdateItemParams = {
  id: number;
  name: string;
  price: number;
  quantity: number;
}