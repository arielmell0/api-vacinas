import { Request as request, Response as response } from 'express';
import { readFile } from 'fs/promises';
const json = JSON.parse(await readFile('./src/bd/vacinas.json', 'utf8'));

export const getVacinas = (req: request, res: response) => res.status(200).json(json.vacinas);