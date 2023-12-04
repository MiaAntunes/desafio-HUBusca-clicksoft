import { Header } from "../../components/header/Header";
import home from "../../assets/img/home.png";
import { goToHomePage } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import { DetailsUser } from "../../components/detailsUser/DetailsUser";
import { Footer } from "../../components/footer/Footer";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import {
  ButtonBack,
  ContainerButtonBack,
  ContainerSection,
  ImgButton,
  
  MainContainerIdUser,
  
  SectionSearchIdUser,
} from "./idUserStyled";

export const IdUser = () => {
  const context = useContext(GlobalContext) as any;
  const { detailsUser } = context;
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <MainContainerIdUser>
        <ContainerButtonBack>
          <ButtonBack onClick={() => goToHomePage(navigate)}>
            <ImgButton src={home} alt="Icone para voltar a Home" />
            Página Inicial
          </ButtonBack>
        </ContainerButtonBack>
        <ContainerSection>
          <SectionSearchIdUser>
            {detailsUser !== undefined ? (
              detailsUser.map((details: IUserGithub, index: number) => {
                return <DetailsUser {...details} key={index} />;
              })
            ) : (
              <></>
            )}
          </SectionSearchIdUser>
        </ContainerSection>
      </MainContainerIdUser>
      <Footer />
    </>
  );
};
