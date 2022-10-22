import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product')
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the product' })
  id: string;

  @Column()
  @Field(() => String, { description: 'product name)' })
  name: string;

  @Column()
  @Field(() => String, { description: 'product description)' })
  description: string;

  @Column()
  @Field(() => Int, { description: 'product price)' })
  price: number;

  @Column()
  @Field(() => Int, { description: 'quantity in stock' })
  stock: number;
}
