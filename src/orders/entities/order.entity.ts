import { InvoiceEntity } from "./invoice.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'orders' })
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_date: Date;

  @Column()
  updated_date: Date;

  @Column()
  deleted_date: Date;

  @OneToMany(() => InvoiceEntity, invoice => invoice.order)
  invoices: InvoiceEntity[];
}