
import express from 'express';
import { json } from 'body-parser'; 
import { get } from 'config';

export default () => {

    const app = express();

    // variaveis da aplicação

    app.set('port', process.env.PORT || get('server.port')); 
    app.use(json());

    return app;

}