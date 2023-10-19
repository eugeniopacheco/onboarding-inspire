import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { InvoiceEntity } from "./invoice.entity";

@Entity({ name: 'items' })
export class ItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  created_date: Date;

  @Column()
  updated_date: Date;

  @Column()
  deleted_date: Date;

  @ManyToOne(() => InvoiceEntity, invoice => invoice.items)
  @JoinColumn({ name: 'invoice_id', referencedColumnName: 'id' })
  invoice: InvoiceEntity;

}