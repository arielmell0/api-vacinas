import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.send('Página inicial'))

export default routes;