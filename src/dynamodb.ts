import * as AWS from 'aws-sdk';
import { AWS_CONFIG } from './config';

AWS.config.update(AWS_CONFIG);

const { DynamoDB } = AWS;

const dynamoClient = new DynamoDB.DocumentClient();
const TableName = 'user';

const get = async () => {
  const params = {
    TableName,
  };
  return await dynamoClient.scan(params).promise();
};

const addOrUpdate = async (characters: object) => {
  const params = {
    TableName,
    Item: characters,
  };

  return await dynamoClient.put(params).promise();
};

const getById = async (id: string) => {
  const params = {
    TableName,
    Key: {
      id,
    },
  };
  return await dynamoClient.get(params).promise();
};

const remove = async (id: string) => {
  const params = {
    TableName,
    Key: {
      id,
    },
  };

  return await dynamoClient.delete(params).promise();
};

export { get, getById, addOrUpdate, remove };
