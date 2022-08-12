import express from 'express';
import { create, read, update, remove, pollVote } from '../controllers/post';
// ------------------------------------------------------------

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', read);
router.put('/:id', update);
router.delete('/:id', remove);
router.put('/:id/vote', pollVote);
// we can also use POST but i prefer to use PUT

export default router;
