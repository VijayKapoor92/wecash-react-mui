/*Auth token test: eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c3VhcmlvIjoxLCJpZF9lbXByZXNhIjoxfQ.qx519vFvlrf49F4eyRZZNmqHmEyoIDMC37Hs7IOrUlA*/
import axios from 'axios';
import {API_BASE_URL, TOKEN} from '../constants';

const client = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN}`,
    }
});


export const

    login = usuario => client.post('/token', usuario),

    getContas = () => client.get('/contas'),

    postConta = conta => client.post('/contas', conta),

    putConta = conta => client.put(`/contas/${conta.id_conta}`, conta),

    getCategorias = () => client.get('/categorias'),

    getMovimentos = () => client.get('/movimentos'),

    getUsuarios = () => client.get('/usuarios')
;