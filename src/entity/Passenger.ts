import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DayOfTheWeek } from "../enum/entity.enum";

@Entity()
export class Passenger extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 50, comment: "탑승자명" })
  name: string;

  @Column({ type: "varchar", length: 15, comment: "휴대폰번호" })
  cellPhone: string;

  @Column({ type: "varchar", length: 5, comment: "우편번호" })
  postalCode: string;

  @Column({ type: "varchar", length: 255, comment: "주소1" })
  address1: string;

  @Column({ type: "varchar", length: 100, comment: "주소2" })
  address2: string;

  @Column({ type: "set", enum: DayOfTheWeek, comment: "희망탑승요일" })
  hopeDays: [DayOfTheWeek];

  @CreateDateColumn({ type: "datetime", precision: 0, default: () => "CURRENT_TIMESTAMP", comment: "생성일" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", precision: 0, default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP", comment: "업데이트일" })
  updatedAt: Date;
}
