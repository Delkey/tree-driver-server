import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Passenger extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cellPhone: string;

  @Column()
  postalCode: string;

  @Column()
  address1: string;

  @Column()
  address2: string;

  @Column()
  hopeDays: number;
}
