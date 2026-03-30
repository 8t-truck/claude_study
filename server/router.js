//경로를 설정해주는 파일
import express from "express";
import { health, getVariable} from "./controller.js";

const Router = express.Router();

Router.get("/health", health);
Router.get("/variable", getVariable);

export default Router;