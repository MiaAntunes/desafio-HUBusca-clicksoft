import  CardUser  from "../../components/cardUser/CardUser"
import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/Header"
import { useRequestData } from "../../hooks/useRequestData"



export const Home = () =>{
  const [userGithub] = useRequestData([],"/users/MiaAntunes")
  const userArray = Object.values(userGithub);

  console.log(userGithub)
  return(
    <>
      <Header/>
      <main>
        <section>
          <h2>Seja bem-vindo ao HUBusca, o pesquisador de usuários do github</h2>
          <p>Aqui você pode pesquisar e encontrar os detalhes de todos usuários que você precisa.</p>
        </section>
        <section>
          <form action="">
            <label htmlFor="">Pesquise pelo nome do usuário</label>
            <input type="text" name="user" id="user" />
            <button type="submit">Buscar</button>
          </form>
          {
            userArray.map((user,index)=>{
              return(
                <CardUser user={user} key={index} />
              )
            })
          }
        </section>
      </main>
      <Footer/>
    </>
  )
}