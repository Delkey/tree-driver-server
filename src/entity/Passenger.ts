import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DayOfTheWeek } from "../enum/entity.enum";

@Entity()
export class Passenger extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50, nullable: true, comment: "탑승자명" })
  name: string;

  @Column({ type: "varchar", length: 15, nullable: true, comment: "휴대폰번호" })
  cellPhone: string;

  @Column({ type: "char", length: 5, nullable: true, comment: "우편번호" })
  postalCode: string;

  @Column({ type: "varchar", length: 200, nullable: true, comment: "주소1" })
  address1: string;

  @Column({ type: "varchar", length: 100, nullable: true, comment: "주소2" })
  address2: string;

  @Column({ type: "int", enum: DayOfTheWeek, array: true, comment: "희망탑승요일" })
  hopeDays: [DayOfTheWeek];

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}
