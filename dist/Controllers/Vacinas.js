import { readFile } from 'fs/promises';
const json = JSON.parse(await readFile('./src/bd/vacinas.json', 'utf8'));
export const getVacinas = (req, res) => res.status(200).json(json.vacinas);
