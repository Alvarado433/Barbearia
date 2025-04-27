import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/", // definir a url base para todas as requisiçoes
    headers: {
        "Content-Type": "application/json" // definir o cabeçalho padrao para envio de dados no formato json

    }
});

export default instance; //Exporta a instancia do axios para ser utilizada em outras partes do projeto
