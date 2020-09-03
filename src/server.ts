import 'reflect-metadata';

import express from 'express';
import routes from './routes/index';
import uploadConfig from './config/upload';
// src/server.ts
import './database';

const app = express();
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.get('/', (request, response) => response.json({ message: 'Hello world' }));

app.listen(3333, () => console.log('server started'));
