import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Invoices } from "./Invoices";

@Index("items_pkey", ["id"], { unique: true })
@Entity("items", { schema: "public" })
export class Items {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("character varying", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @Column("numeric", { name: "price", nullable: true, precision: 8, scale: 2 })
  price: string | null;

  @Column("integer", { name: "quantity", nullable: true })
  quantity: number | null;

  @Column("timestamp with time zone", { name: "created_date", nullable: true })
  createdDate: Date | null;

  @Column("timestamp with time zone", { name: "updated_date", nullable: true })
  updatedDate: Date | null;

  @Column("timestamp with time zone", { name: "deleted_date", nullable: true })
  deletedDate: Date | null;

  @ManyToOne(() => Invoices, (invoices) => invoices.items)
  @JoinColumn([{ name: "invoice_id", referencedColumnName: "id" }])
  invoice: Invoices;
}
