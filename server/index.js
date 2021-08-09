import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js' 

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const url = 'mongodb://localhost:27017/Memories_database';
const port = process.env.PORT || 5000;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => app.listen(port, (() => console.log(`Server is listening at ${port}`))))
  .catch((err) => console.log(err.meessage));

mongoose.set('useFindAndModify', false);

app.use('/posts', postRoutes);