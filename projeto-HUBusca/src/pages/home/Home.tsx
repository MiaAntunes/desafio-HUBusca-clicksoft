import { CardUser } from "../../components/cardUser/CardUser"
import { Footer } from "../../components/footer/Footer"
import { Header } from "../../components/header/Header"



export const Home = () =>{
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
          !!! map do User fazer uma lógica para aparecer o cardUser só quando for pesquisado
          <CardUser/>
        </section>
      </main>
      <Footer/>
    </>
  )
}