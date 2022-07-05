import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import DataSourceTypeorm from './modules/shared/infra/typeorm/database/dataSource';

DataSourceTypeorm.initialize().then(() => {
  const server = express();

  server.listen(3333, () => {
    console.log('Server ready to receive requests');
  });
}).catch((err) => {
  console.log('err', err);
});
