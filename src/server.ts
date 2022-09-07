import express, { urlencoded } from 'express';
import { routes } from './routes.js';

const port = process.env.PORT || 3000;
const app = express();

app.use(routes)
app.use(express.json(), urlencoded({ extended: true }))

app.listen(port, () => console.log(`Server running at port ${port}`));  