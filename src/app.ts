import * as dynamoose from 'dynamoose';
import express from 'express';
import urlRoute from './routes/post';
import { PORT, DynamoLocalURL } from './config';
import cors from 'cors';
// ------------------------------------------------------------

dynamoose.aws.ddb.local(DynamoLocalURL);

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/', urlRoute);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
