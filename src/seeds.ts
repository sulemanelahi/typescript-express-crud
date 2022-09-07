import axios from 'axios';
import { addOrUpdate } from './dynamodb';
import { HARRY_POTTER_API } from './config';

const seedData = async () => {
  const url = HARRY_POTTER_API;
  try {
    const { data: characters } = await axios.get(url!);
    const characterPromises = characters?.map((character: object, index: number) => addOrUpdate({ ...character, id: index.toString() }));
    await Promise.all(characterPromises);
    console.log('yeh!!!');
  } catch (error) {
    console.log(error);
  }
};
seedData();

export {};
