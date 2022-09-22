import express from 'express';
import { create, read, update, remove, voteById } from '../controllers/post';
// ------------------------------------------------------------

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', read);
router.put('/:id', update);
router.delete('/:id/:title', remove);
router.put('/vote/:id/:title', voteById);

export default router;
