import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Invoices } from "./Invoices";

@Index("orders_pkey", ["id"], { unique: true })
@Entity("orders", { schema: "public" })
export class Orders {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("timestamp with time zone", { name: "created_date", nullable: true })
  createdDate: Date | null;

  @Column("timestamp with time zone", { name: "updated_date", nullable: true })
  updatedDate: Date | null;

  @Column("timestamp with time zone", { name: "deleted_date", nullable: true })
  deletedDate: Date | null;

  @OneToMany(() => Invoices, (invoices) => invoices.order)
  invoices: Invoices[];

  @OneToMany(() => Invoices, (invoices) => invoices.order_2)
  invoices2: Invoices[];

  @OneToMany(() => Invoices, (invoices) => invoices.order_3)
  invoices3: Invoices[];

  @OneToMany(() => Invoices, (invoices) => invoices.order_4)
  invoices4: Invoices[];

  @OneToMany(() => Invoices, (invoices) => invoices.order_5)
  invoices5: Invoices[];
}
