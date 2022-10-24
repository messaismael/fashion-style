import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtTokenService: JwtService,
  ) {}
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneBy({ email: email });
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        delete user.password;
        return user;
      }
    }
    return null;
  }

  async generateUserCredentials(user: User) {
    const payload = {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
    };
    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}
