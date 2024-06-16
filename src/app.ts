import express, { Request, Response, NextFunction } from 'express';
import todoRoutes from './routes/todo';
const app = express();

//here we forward any request coming to this path '/todos' to our create todoRoutes
//add we are telling our express app to use this created router
app.use('/todos', todoRoutes);

//we create an error handling route
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});
app.listen(4000);
