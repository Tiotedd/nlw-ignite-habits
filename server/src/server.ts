import fastify from 'fastify';
import cors from '@fastify/cors';
import { appRoutes } from './routes';

const app = fastify();


app.register(cors)
app.register(appRoutes)

// metodo http: get, post, put, patch, delete



app
  .listen({
    port: 3333,
    host: "0.0.0.0",
  })
  .then(() => {
    console.log(' HTTP server running! porta 3333');
  });
