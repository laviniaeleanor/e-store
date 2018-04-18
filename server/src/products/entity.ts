import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
import { IsNumber, IsString, Length, IsEmail } from 'class-validator';

@Entity()
export default class Product extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Length(5, 25)
  @Column('text')
  description: string

  @IsString()
  @Column('text')
  picture: string

  @IsString()
  @Column('text')
  price: number

  @IsEmail()
  @Column('text')
  email: string

  @IsString()
  @Column('text')
  phone: number
}

