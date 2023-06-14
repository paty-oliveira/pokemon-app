import { rest } from 'msw';
import {mockPokemon} from './mockData';

export const handlers = [
    rest.get('/api/pokemons', (req, res, ctx) => {
        const param = req.url.searchParams.get("param");
        return res(ctx.json(mockPokemon));
    })
]