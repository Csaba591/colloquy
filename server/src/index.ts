import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import {
  router
} from './routes/index';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();

const dbUri = `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PW}@localhost:${process.env.MONGO_DB_PORT}/listify`;
mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) console.log('Mongo DB connection error: ', err);
  else console.log('Mongo DB connected!');
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(router);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server listening on port ${port}!`));