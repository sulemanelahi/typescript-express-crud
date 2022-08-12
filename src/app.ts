import express from 'express';
import urlRoute from './routes/post';
import { PORT } from './config';
import { connectDB } from './mongodb';
import cors from 'cors';
// ------------------------------------------------------------

const app = express();

app.use(cors());

connectDB();

app.use(express.json());

app.use('/api/', urlRoute);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
