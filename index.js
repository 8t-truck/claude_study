//main 함수의 역할을 한다 
import express from 'express';
import {json} from "express";
import dotenv  from "dotenv";
import Router from "./server/router.js";

dotenv.config();

const App = express();
App.use(json());

App.use("/api", Router);

const port = process.env.PORT ||"12345";

App.listen(port, () =>{
    console.log(`listening on port ${port}`);
});