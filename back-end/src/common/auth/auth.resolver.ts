import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from 'src/user/dto/create-user.input';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoggedUserOutput } from './dto/ logged-user.output';
import { LoginUserInput } from './dto/login-user.input';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Mutation(() => User)
  register(@Args('registerData') user: CreateUserInput) {
    return this.userService.create(user);
  }

  @Query(() => LoggedUserOutput)
  login(@Args('loginData') loginUser: LoginUserInput) {
    return { access_token: this.authService.loginUser(loginUser) };
  }
}
