import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Orders } from "./Orders";
import { Items } from "./Items";

@Index("invoices_pkey", ["id"], { unique: true })
@Entity("invoices", { schema: "public" })
export class Invoices {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("timestamp with time zone", { name: "created_date", nullable: true })
  createdDate: Date | null;

  @Column("timestamp with time zone", { name: "updated_date", nullable: true })
  updatedDate: Date | null;

  @Column("timestamp with time zone", { name: "deleted_date", nullable: true })
  deletedDate: Date | null;

  @ManyToOne(() => Orders, (orders) => orders.invoices)
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order: Orders;

  @ManyToOne(() => Orders, (orders) => orders.invoices2)
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order_2: Orders;

  @ManyToOne(() => Orders, (orders) => orders.invoices3)
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order_3: Orders;

  @ManyToOne(() => Orders, (orders) => orders.invoices4)
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order_4: Orders;

  @ManyToOne(() => Orders, (orders) => orders.invoices5)
  @JoinColumn([{ name: "order_id", referencedColumnName: "id" }])
  order_5: Orders;

  @OneToMany(() => Items, (items) => items.invoice)
  items: Items[];
}
