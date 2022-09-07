import { Request, Response } from 'express';
import { get, getById, addOrUpdate, remove as unpublish } from '../dynamodb';
// -------------------------------------------

// perform create operation
export const create = async (req: Request, res: Response) => {
  const character = req.body;
  try {
    await addOrUpdate(character);
    return res.status(201).send('Data Saved');
  } catch (error) {
    console.error(`Error: ${error} `);
    res.status(400).send(error);
  }
};

// perform read operation
export const read = async (req: Request, res: Response) => {
  try {
    const characters = await get();
    return res.status(200).send(characters);
  } catch (error) {
    console.error(`Error: ${error} `);
    return res.status(400).send(error);
  }
};

// perform update operation
export const update = async (req: Request, res: Response) => {
  const character = req?.body;
  const { id } = req.params;
  character.id = id.toString();

  try {
    await addOrUpdate(character);
    return res.status(200).send('Successfully updated');
  } catch (error) {
    console.error(`Error: ${error} `);
    return res.status(400).send(error);
  }
};

// perform delete operation
export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await unpublish(id);
    return res.status(200).send('Successfully removed');
  } catch (error) {
    console.error(`Error: ${error} `);
    return res.status(400).send(error);
  }
};

// perform read operation
export const readById = async (req: Request, res: Response) => {
  const { id } = req?.params;
  try {
    const characters = await getById(id.toString());
    return res.status(200).send(characters);
  } catch (error) {
    console.error(`Error: ${error} `);
    return res.status(400).send(error);
  }
};
