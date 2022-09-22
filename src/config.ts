import * as dotenv from 'dotenv';
dotenv.config();
// ------------------------------------------------------------

export const PORT = process.env.PORT;
export const DynamoLocalURL = process.env.DYNAMO_URL;
export const MONGO_URI = process.env.MONGO_URI;
const ACCESS_KEY_ID: any = process.env.AWS_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY: any = process.env.AWS_SECRET_ACCESS_KEY;
const REGION: any = process.env.AWS_REGION;
export const AWS_CONFIG = {
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  region: REGION,
};
export const HARRY_POTTER_API = process.env.HARRY_POTTER_API;
