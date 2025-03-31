import express, { Request, Response } from "express";
import cors from 'cors'
import TasksRouter from "./routes/TasksRoute";

const App = express();

App.use(express.json());
App.use(express.urlencoded({extended:true}));
App.use(cors())

App.use('/', TasksRouter)

App.listen(8080, () : void => {
  console.log("the server is running in port 8080");
});
