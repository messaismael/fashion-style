import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from 'src/user/dto/create-user.input';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user.input';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Mutation(() => User)
  register(@Args('createUser') user: CreateUserInput) {
    return this.userService.create(user);
  }

  @Query(() => String)
  login(@Args('loginUser') loginUser: LoginUserInput) {
    return this.authService.loginUser(loginUser);
  }
}
