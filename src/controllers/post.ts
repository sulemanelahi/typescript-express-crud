import { Request, Response } from 'express';
import Post from '../models/post';
// -------------------------------------------

// // perform create operation
export const create = async (req: Request, res: Response) => {
  const post = new Post(req.body);
  try {
    await post.save();
    return res.status(201).send(post);
  } catch (error) {
    return res.status(400).send(error);
  }
};

// // perform read operation
export const read = async (req: Request, res: Response) => {
  try {
    const characters = await Post.scan().exec();
    return res.status(200).send(characters);
  } catch (error) {
    console.error(`Error: ${error} `);
    return res.status(400).send(error);
  }
};

// // perform update operation
export const update = async (req: Request, res: Response) => {
  const { body } = req;
  const { id } = req.params;
  console.log(typeof id);
  try {
    await Post.update({ id: Number(id), title: body?.title }, { content: body?.content });
    return res.status(200).send('Successfully updated');
  } catch (error) {
    console.error(`Error: ${error} `);
    return res.status(400).send(error);
  }
};

// // perform delete operation
export const remove = async (req: Request, res: Response) => {
  const { id, title } = req.params;
  try {
    await Post.delete({ id: Number(id), title });
    return res.status(200).send('Successfully removed');
  } catch (error) {
    console.error(`Error: ${error} `);
    return res.status(400).send(error);
  }
};

// // perform read operation
export const voteById = async (req: Request, res: Response) => {
  const { id, title } = req?.params;
  try {
    await Post.update({ id: Number(id), title }, { $ADD: { vote: 1 } });
    return res.status(200).send('successful');
  } catch (error) {
    console.error(`Error: ${error} `);
    return res.status(400).send(error);
  }
};
