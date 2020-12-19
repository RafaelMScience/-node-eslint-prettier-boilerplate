/* eslint-disable no-console */
import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

const startServer = async () => {
  const app = express();

  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    }),
  );
  app.use(express.json());

  app.listen(5000, () => {
    console.log('🚀 Running at localhost:5000');
  });
};

startServer().catch((err: Error) => {
  console.log(err);
});
