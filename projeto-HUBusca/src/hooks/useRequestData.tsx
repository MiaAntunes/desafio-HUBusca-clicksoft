import  { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL, TOKEN_NAME } from '../contants/BaseUrl'



export const useRequestData = (estadoInicial:any, path:string) => {

    const [dados, setDados] = useState(estadoInicial)
    const [erro, setErro] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const receberDados = async () =>{
        await axios.get(`${BASE_URL}${path}`,{
            headers:{
                Authorization:TOKEN_NAME
            }
        })
        .then((resposta) => {
            setDados(resposta.data)
            setIsLoading(false);
        })
        .catch((erro) => {
            setErro(erro.message)
            setIsLoading(false);
        })
    }

    useEffect(() => {
        receberDados()
    }, [path])

    return [dados, receberDados, erro, isLoading]
}