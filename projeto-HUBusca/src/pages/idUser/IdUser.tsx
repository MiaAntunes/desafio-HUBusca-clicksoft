import { Header } from "../../components/header/Header";
import home from "../../assets/img/home.png";
import { goToHomePage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { DetailsUser } from "../../components/detailsUser/DetailsUser";
import { Footer } from "../../components/footer/Footer";
import { ContextType, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";


export const IdUser = () => {
  const context = useContext(GlobalContext) as ContextType;
  const { detailsUser } = context;
  const navigate = useNavigate();



  return (
    <>
      <Header />
      <main>
        <div>
          <button onClick={()=>goToHomePage(navigate)}>
            <img src={home} alt="Icone para voltar a Home" />
            <p>Página Inicial</p>
          </button>
        </div>
        <section>
          {
          detailsUser !== undefined ?
            detailsUser.map((details: IUserGithub, index: number) => {
              return <DetailsUser {...details} key={index} />;
            }):
            <></>
          }
        </section>
      </main>
      <Footer />
    </>
  );
};
