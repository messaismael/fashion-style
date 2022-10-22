import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id of the user' })
  id: string;

  @Column()
  @Field(() => String, { description: 'the firstname of user)' })
  firstName: string;

  @Column()
  @Field(() => String, { description: 'the lastname of user)' })
  lastName: string;

  @Column()
  @Field(() => String, { description: 'the email of user)' })
  email: string;

  @Column()
  @Field(() => String, { description: 'the gender of user)' })
  gender: 'M' | 'F';

  @Column()
  @Field(() => String, { description: 'the gender of user)' })
  religion: string;

  @Column()
  @Field(() => String, { description: 'the address of user)' })
  address: string;

  @Column()
  @Field(() => Number, { description: 'the address of user)' })
  age: number;

  @Column({ default: 'SIMPLE_USER' })
  @Field(() => String, { description: 'the role of user)' })
  role: string;
}
