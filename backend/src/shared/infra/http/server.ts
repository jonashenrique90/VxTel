import 'reflect-metadata';
import express from 'express';
import routes from '@shared/infra/http/routes';
import cors from 'cors';
import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('🚀 Server Start on Port 3333');   
});