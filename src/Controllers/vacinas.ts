import { Request as request, Response as response } from 'express';
import { readFile, writeFile } from 'fs/promises';
const json = JSON.parse(await readFile('./src/bd/vacinas.json', 'utf8'));

const vacinas = {
    getVacinas: (req: request, res: response) => res.status(200).json(json.vacinas), 

    postVacinas: async (req: request, res: response) => {
        const vacina: { nome: string, laboratorio: string } = req.body;
        json.vacinas.push(vacina);

        try {
            await writeFile("./src/bd/vacinas.json", JSON.stringify(json));
            return res.status(200).json({ message: 'Vacina adicionada com sucesso!' });
        } catch(e) {
            console.log(e);
            return res.status(500).json({ message: 'Ops, um erro ocorreu!' });
        }
    }
}

export default vacinas;