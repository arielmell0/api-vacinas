import { readFile } from 'fs/promises';
const json = JSON.parse(await readFile('./src/bd/vacinas.json', 'utf8'));

console.log(json);