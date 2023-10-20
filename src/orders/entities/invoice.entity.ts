import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { OrderEntity } from "./order.entity";
import { ItemEntity } from "./item.entity";

@Index("invoices_pkey", ["id"], { unique: true })
@Entity("invoices", { schema: "public" })
export class InvoiceEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id?: number;

  @Column("timestamp with time zone", { name: "created_date", nullable: true })
  createdDate?: Date;

  @Column("timestamp with time zone", { name: "updated_date", nullable: true })
  updatedDate?: Date;

  @Column("timestamp with time zone", { name: "deleted_date", nullable: true })
  deletedDate?: Date;

  @OneToOne(() => OrderEntity, (order) => order.invoice)
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order?: OrderEntity;

  @OneToMany(() => ItemEntity, (items) => items.invoice, { cascade: ['insert', 'update'] })
  items?: ItemEntity[];
}
