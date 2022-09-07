import { Router } from 'express';
import { getVacinas } from './Controllers/vacinas.js';
export const routes = Router();
// home
routes.get('/', (req, res) => res.status(200).json({ message: 'API at work!' }));
// /vacinas
routes.get('/vacinas', getVacinas);
