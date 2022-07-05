import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import DataSourceTypeorm from '../../typeorm/database/dataSource';
import routes from './routes';
import { errors } from 'celebrate';

DataSourceTypeorm.initialize().then(() => {
  const server = express();
  server.use(express.json());
  server.use(routes);
  server.use(errors());

  server.listen(3333, () => {
    console.log('Server ready to receive requests');
  });
}).catch((err) => {
  console.log('err', err);
});
