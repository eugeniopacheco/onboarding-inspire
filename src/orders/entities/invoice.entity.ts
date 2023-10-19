import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderEntity } from "./order.entity";
import { ItemEntity } from "./item.entity";

@Entity({ name: 'invoices' })
export class InvoiceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  created_date: Date;

  @Column()
  updated_date: Date;

  @Column()
  deleted_date: Date;

  @ManyToOne(() => OrderEntity, order => order.invoices)
  @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
  order: OrderEntity;

  @OneToMany(() => ItemEntity, item => item.invoice)
  items: ItemEntity[];

}