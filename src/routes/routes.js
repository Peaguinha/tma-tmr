import express from 'express'
const routes = express.Router();
import { createdata } from '../controllers/controller_tma-tmr.js';

routes.post("/tma-tmr", createdata )

export default routes;