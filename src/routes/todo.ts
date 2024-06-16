import { Router } from 'express';
import {
    createTodo,
    getTodos,
    updateTodos,
    deleteTodo,
} from '../controllers/todo';
const router = Router();

//Register some middelware endpoints

router.post('/', createTodo);
router.get('/', getTodos);
router.patch('/:id', updateTodos);
router.delete('/:id', deleteTodo);


export default router;
