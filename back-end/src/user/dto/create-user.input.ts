import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'first name of the user' })
  firstName: string;

  @Field(() => String, { description: 'last name of the user' })
  lastName: string;

  @Field(() => String, { description: 'email of the user' })
  email: string;

  @Field(() => String, { description: 'email of the user' })
  address: string;

  @Field(() => String, { description: 'role of the user' })
  role: string;

  @Field(() => String, { description: 'Password of user' })
  password: string;
}
