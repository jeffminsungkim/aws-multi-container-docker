import * as path from 'path';

export default {
  name: process.env.TYPEORM_NAME,
  type: process.env.TYPEORM_TYPE,
  host: process.env.TYPEORM_HOST,
  database: process.env.TYPEORM_DATABASE,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  port: Number(process.env.TYPEORM_PORT),
  logging: process.env.TYPEORM_LOGGING === 'true',
  entities: path.resolve(__dirname, '..').concat(process.env.TYPEORM_ENTITIES).split(' '),

  // ! Never use in production
  migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
  synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
};
