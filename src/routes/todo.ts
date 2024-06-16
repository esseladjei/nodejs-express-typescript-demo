import { Router } from 'express';

const router = Router();

//Register some middelware endpoints

router.post('/');
router.get('/');
router.delete('/:id');
router.get('/:id');
router.patch('/:id');

export default router;
