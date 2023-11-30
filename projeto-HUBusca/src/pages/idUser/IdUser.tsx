import { Header } from "../../components/header/Header"
import home from "../../assets/img/home.png"
import { goToHomePage } from "../../router/coordinator"
import { useNavigate } from "react-router-dom"
import { DetailsUser } from "../../components/detailsUser/DetailsUser"
import { Footer } from "../../components/footer/Footer"

export const IdUser = () =>{
  const navigate = useNavigate()
  // !!! Vou ter que fazer um context para trazer as informações para essa página

  return(
    <>
      <Header/>
      <main>
        <div>
          <button onClick={goToHomePage(navigate)}>
            <img src={home} alt="Icone para voltar a Home" />
            <p>Página Inicial</p>
          </button>
        </div>
        <section>
          map do idUser
          <DetailsUser/>
        </section>
      </main>
      <Footer/>
    </>
  )
}