import express from 'express';
import { create, read, update, remove, readById } from '../controllers/post';
// ------------------------------------------------------------

const router = express.Router({ mergeParams: true });

router.post('/', create);
router.get('/', read);
router.put('/:id', update);
router.delete('/:id', remove);
router.get('/:id', readById);

export default router;
