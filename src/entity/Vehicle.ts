import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DayOfTheWeek } from "../enum/entity.enum";

@Entity()
export class Vehicle extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50, nullable: true, comment: "차량명" })
  vehicleNickName: string;

  @Column({ type: "varchar", length: 50, nullable: true, comment: "모델명" })
  vehicleModel: string;

  @Column({ type: "varchar", length: 30, nullable: true, comment: "차량번호" })
  vehicleNumber: string;

  @Column({ type: "int", nullable: true, comment: "최대인원" })
  maximumPeople: number;

  @Column({ type: "varchar", length: 50, nullable: true, comment: "담당자" })
  managerName: string;

  @Column({ type: "varchar", length: 15, nullable: true, comment: "담당자휴대폰" })
  managerCellPhone: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
