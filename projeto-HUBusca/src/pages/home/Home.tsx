import { useNavigate } from "react-router-dom"
import  CardUser  from "../../components/cardUser/CardUser"
import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/Header"
import { goToPostIdPage } from "../../router/coordinator"
import { ContextType, useContext } from "react"
import useForm from "../../hooks/useForm"
import { GlobalContext } from "../../context/GlobalState"
import axios from "axios"
import { BASE_URL, TOKEN_NAME } from "../../contants/BaseUrl"
import { useState } from 'react'

export const Home = () =>{
  const navigate = useNavigate()

  const context = useContext(GlobalContext) as ContextType;
  const {detailsUser ,setDetailsUser} = context 

  const { form, onChange} = useForm({
    username:""
  })

  const [erro, setErro] = useState('')

  const saveUser = async (event:React.FormEvent) =>{
    event.preventDefault();

    await axios.get(`${BASE_URL}/users/${form.username}`,{
      headers:{
        Authorization:TOKEN_NAME
      }
    })
    .then((response)=>{
      setDetailsUser([response.data])
    })
    .catch((error)=>{
      setErro(error)
    })
  }

  console.log(form.username)

  return(
    <>
      <Header/>
      <main>
        <section>
          <h2>Seja bem-vindo ao HUBusca, o pesquisador de usuários do github</h2>
          <p>Aqui você pode pesquisar e encontrar os detalhes de todos usuários que você precisa.</p>
        </section>
        <section>
          <form onSubmit={(event)=> saveUser(event)}>
            <label htmlFor="username">Pesquise pelo nome do usuário</label>
            <input type="text" name="username" id="username" value={form.username} onChange={onChange} placeholder="Digite o nome do usuário" />
            <button type="submit" >Buscar</button>
          </form>
          {
            detailsUser.length > 0?
            detailsUser.map((user:any ,index:number)=>{
             return(
               <button key={index} onClick={()=>goToPostIdPage(navigate, user.name)}>
                 <CardUser  user={user}  />
               </button>
             )}):
             erro !== "" ? 
             (
              <p>Usuário não encontrado</p>
             ):
             (
              <></>
             )
          }
        </section>
      </main>
      <Footer/>
    </>
  )
}