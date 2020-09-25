import express from 'express';
import bodyparser from 'body-parser';
import morgan from 'morgan';
import routes from '../src/routes';
import cors from 'cors';
import dotenv from 'dotenv';
import genericErrorHandler from './middlewares/genericErrorHandler';


const app = express();

app.use(bodyparser.json());
app.use(morgan('tiny'));
app.use(cors());

app.use(routes);
app.use(genericErrorHandler);

dotenv.config();

app.listen(process.env.APP_PORT, () => {
    console.log(`Listening on port at ${ process.env.APP_PORT }`);
})