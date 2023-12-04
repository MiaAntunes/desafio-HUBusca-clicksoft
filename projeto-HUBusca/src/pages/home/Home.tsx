import { useNavigate } from "react-router-dom"
import  CardUser  from "../../components/cardUser/CardUser"
import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/Header"
import { goToPostIdPage } from "../../router/coordinator"
import { useContext } from "react"
import useForm from "../../hooks/useForm"
import { GlobalContext } from "../../context/GlobalState"
import axios from "axios"
import { BASE_URL, TOKEN_NAME } from "../../contants/BaseUrl"
import { useState } from 'react'
import { ButtonContainer, ButtonHome, FormHome, InputHome, LabelHome, MainContainer, SectionSearch, SectionTitle, TextHome, TitleHome } from "./HomeStyled"

export const Home = () =>{
  const navigate = useNavigate()

  const context = useContext(GlobalContext) as any;
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

  // console.log(form.username)

  return(
    <>
      <Header/>
      <MainContainer>
        <SectionTitle>
          <TitleHome>Seja bem-vindo ao HUBusca, o pesquisador de usuários do github</TitleHome>
          <TextHome>Aqui você pode pesquisar e encontrar os detalhes de todos usuários que você precisa.</TextHome>
        </SectionTitle>
        <SectionSearch>
          <FormHome onSubmit={(event)=> saveUser(event)}>
            <LabelHome htmlFor="username">Pesquise pelo nome do usuário</LabelHome>
            <InputHome type="text" name="username" id="username" value={form.username} onChange={onChange} placeholder="Digite o nome do usuário" />
            <ButtonHome type="submit" >Buscar</ButtonHome>
          </FormHome>
          {
            detailsUser.length > 0?
            detailsUser.map((user:any ,index:number)=>{
             return(
               <ButtonContainer key={index} onClick={()=>goToPostIdPage(navigate, user.name)}>
                 <CardUser  user={user}  />
               </ButtonContainer>
             )}):
             erro !== "" ? 
             (
              <p>Usuário não encontrado</p>
             ):
             (
              <></>
             )
          }
        </SectionSearch>
      </MainContainer>
      <Footer/>
    </>
  )
}