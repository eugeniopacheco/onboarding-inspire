import {
  Column,
  Entity,
  Index,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { InvoiceEntity } from "./invoice.entity";

@Index("orders_pkey", ["id"], { unique: true })
@Entity("orders", { schema: "public" })
export class OrderEntity {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: number;

  @Column("timestamp with time zone", { name: "created_date", nullable: true })
  createdDate?: Date;

  @Column("timestamp with time zone", { name: "updated_date", nullable: true })
  updatedDate?: Date;

  @Column("timestamp with time zone", { name: "deleted_date", nullable: true })
  deletedDate?: Date;

  @OneToOne(() => InvoiceEntity, (invoice) => invoice.order, { cascade: ['insert', 'update'] })
  invoice: InvoiceEntity;

}
