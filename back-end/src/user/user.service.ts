import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  create(createUserInput: CreateUserInput) {
    return this.usersRepository.create(createUserInput);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: string) {
    return this.findOne(id);
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.usersRepository.update(id, updateUserInput);
  }

  remove(id: string) {
    return this.usersRepository.delete(id);
  }
}
