import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { User } from './src/user/entities/user.entity';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('FS_HOST'),
  port: configService.get('FS_PORT'),
  username: configService.get('FS_USERNAME'),
  password: configService.get('FS_PASSWORD'),
  database: configService.get('FS_DB'),
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/**/migrations/*.js'],
});
