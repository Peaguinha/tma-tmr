import express from 'express'
const routes = express.Router();
import { createdata } from '../controllers/controller_satisfacao.js';

routes.post("/pesquisa", createdata )

export default routes;