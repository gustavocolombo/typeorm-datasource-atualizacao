/* eslint-disable import/prefer-default-export */
import { DataSource } from 'typeorm';
import 'dotenv/config';

const DataSourceTypeorm = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: Number(process.env.TYPEORM_PORT),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  migrations: [
    'src/modules/shared/infra/typeorm/database/migrations/*ts',
  ],
  entities: [
    'src/**/*.entity.ts',
  ],
  migrationsRun: true,
  migrationsTransactionMode: 'all',
});

DataSourceTypeorm.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

export default DataSourceTypeorm;
