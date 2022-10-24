import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { AuthService } from 'src/common/services/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private readonly authService: AuthService,
  ) {}
  async create(createUserInput: CreateUserInput) {
    const saltOrRounds = 10;
    const password = createUserInput.password;
    createUserInput.password = await bcrypt.hash(password, saltOrRounds);
    return this.usersRepository.create(createUserInput);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOneBy(filter: any) {
    return this.usersRepository.findOne({ ...filter });
  }

  findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.usersRepository.update(id, updateUserInput);
  }

  remove(id: string) {
    return this.usersRepository.delete(id);
  }

  async loginUser(loginUserInput: { email: string; password: string }) {
    const user = await this.authService.validateUser(
      loginUserInput.email,
      loginUserInput.password,
    );
    if (!user) {
      throw new BadRequestException(`Email or password are invalid`);
    } else {
      return this.authService.generateUserCredentials(user);
    }
  }
}
