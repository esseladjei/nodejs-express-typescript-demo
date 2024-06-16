import { RequestHandler } from 'express';
import TodoModel from '../models/todo';
import { Todo } from '../types/todo';
//RequestHandler makes it easy to import the req,res, next handler types in one Type definition instead of repeating it for all these methods

const TODOS: Todo[] = [];
export const createTodo: RequestHandler = (req, res, next) => {
    const text: string = (req.body as { text: string }).text;
    const id: string = Math.random().toString();
    const newTodo = new TodoModel(id, text);
    TODOS.push(newTodo);
    res.status(200).json({ message: 'created a todo', content: TODOS });
};

export const getTodos: RequestHandler = (req, res, next) => {
    res.status(200).json(TODOS);
};

export const updateTodos: RequestHandler<{ id: string }> = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = (req.body as { text: string }).text;

    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error("couldn't not find todo!");
    }

    TODOS[todoIndex] = new TodoModel(TODOS[todoIndex].id, updatedText);
    res.status(200).json({ message: 'Updated', updatedTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('No todo match found!');
    }
    TODOS.splice(todoIndex,1);
    res.status(200).json({
        message: 'Todo deleted',
        deletedTodo: todoIndex,
    });
};
