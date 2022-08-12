import { Request, Response } from 'express';
import post from '../models/post';
// -------------------------------------------

// perform create operation
export const create = async (req: Request, res: Response) => {
  const { title, content, author } = req?.body;
  try {
    await post.create({
      title,
      content,
      author,
    });
    return res.status(201).send('Data Saved');
  } catch (error) {
    console.error(`Error: ${error} `);
    res.status(400).send(error);
  }
};

// perform read operation
export const read = async (req: Request, res: Response) => {
  try {
    const posts = await post.find({});
    return res.status(200).send(posts);
  } catch (error) {
    console.error(`Error: ${error} `);
    return res.status(400).send(error);
  }
};

// perform update operation
export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await post.findByIdAndUpdate(id, req.body);
    return res.status(200).send('Successfully updated');
  } catch (error) {
    console.error(`Error: ${error} `);
    return res.status(400).send(error);
  }
};

// perform delete operation
export const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await post.findByIdAndDelete(id);
    return res.status(200).send('Successfully removed');
  } catch (error) {
    console.error(`Error: ${error} `);
    return res.status(400).send(error);
  }
};

// perform vote polling operation
export const pollVote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { vote } = req.body;

    if (vote) {
      await post.findByIdAndUpdate(id, { $inc: { vote: 1 } });
      return res.status(200).send('vote up');
    }
    await post.findByIdAndUpdate(id, { $inc: { vote: -1 } });
    return res.status(200).send('vote down');
  } catch (error) {
    console.error(`Error: ${error} `);
    return res.status(400).send(error);
  }
};
