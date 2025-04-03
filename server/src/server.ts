import express, { Request, Response, Application } from "express";
import cors from 'cors'
import TasksRouter from "./routes/TasksRoute";
import UserRouter from "./routes/UserRoute";


const App: Application = express();

App.use(express.json());
App.use(express.urlencoded({extended:true}));
App.use(cors())

App.use('/task', TasksRouter)
App.use('/user', UserRouter)

App.listen(8080, () : void => {
  console.log("the server is running in port 8080");
});
