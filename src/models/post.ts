import * as dynamoose from 'dynamoose';

const postSchema = new dynamoose.Schema({
  id: {
    type: Number,
    required: true,
    hashKey: true,
  },
  title: {
    type: String,
    required: true,
    rangeKey: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  vote: {
    type: Number,
    default: 0,
  },
});

export default dynamoose.model('Post', postSchema);
