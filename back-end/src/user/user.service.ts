import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createUserInput: CreateUserInput) {
    const saltOrRounds = 10;
    const password = createUserInput.password;
    createUserInput.password = await bcrypt.hash(password, saltOrRounds);

    const user = this.usersRepository.create(createUserInput);

    return this.usersRepository.save(user);
    /*    }else{
      throw new BadRequestException(`Email or password are invalid`);
    } */
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
}
