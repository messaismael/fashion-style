import { ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',

      host: process.env.FS_HOST,

      port: parseInt(process.env.FS_PORT, 10),

      username: process.env.FS_USERNAME,

      password: process.env.FS_PASSWORD,

      database: process.env.FS_DB,

      entities: [`${__dirname}/../**/*.entity.{ts,js}`],

      migrations: [`${__dirname}/../migrations/*.{ts,js}`],

      logging: true,

      synchronize: false,

      cli: {
        migrationsDir: 'src/migrations',
      },

      extra: {
        charset: 'utf8mb4_unicode_ci',
      },
    };
  },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',

  host: process.env.FS_HOST,

  port: parseInt(process.env.FS_PORT, 10),

  username: process.env.FS_USERNAME,

  password: process.env.FS_PASSWORD,

  database: process.env.FS_DB,

  entities: [`${__dirname}/../**/*.entity.{ts,js}`],

  migrations: [`${__dirname}/../migrations/*.{ts,js}`],

  logging: true,

  cli: {
    migrationsDir: 'src/migrations',
  },

  extra: {
    charset: 'utf8mb4_unicode_ci',
  },
};
