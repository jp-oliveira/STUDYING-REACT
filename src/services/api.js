import axios from "axios";

//axios é uma lib do react para consultar http
//base url é o endereço que é fixo na nossa consulta. Ou seja: todos as
//pesquisas começam com esse valor
const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;