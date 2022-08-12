import mongoose, { Schema, Document } from 'mongoose';
// ------------------------------

export interface Post {
  title: string;
  content: string;
  author: string;
}

export interface PostModel extends Post, Document {}

const postSchema: Schema = new Schema({
  title: {
    type: 'string',
    required: true,
  },
  content: {
    type: 'string',
    required: true,
  },
  author: {
    type: 'string',
    required: true,
  },
  vote: {
    type: 'number',
    default: 0,
  },
});

export default mongoose.model<PostModel>('Post', postSchema);
