import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import todoRoutes from './routes/todo';
const app = express();

/*this middleware Json is from a third-party package which is registered on the express app
 which will parse the body of all incoming request and extracts any json data it finds in 
 there and populates the req.body key of request object with that parse json data */
app.use(json());


//here we forward any request coming to this path '/todos' to our create todoRoutes
//add we are telling our express app to use this created router
app.use('/todos', todoRoutes);

//we create an error handling route
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: err.message });
});
app.listen(4000);
