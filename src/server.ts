import express from 'express';
import routes from './routes';

const port = 3000;
const app = express();


app.listen(port, () => console.log(`Server running at port ${port}`))