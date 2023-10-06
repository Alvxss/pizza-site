import axios from 'axios';

let api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function adicionarPizza(nome, preco, qtd, ingred, foto) {
    let pizza = {
        nome: nome,
        preco: preco,
        quantidade: qtd,
        ingredientes: ingred,
        foto: foto
    }

    let resp = await api.post('/pizza', pizza);
    console.log(resp);

    return resp;
}