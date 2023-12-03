import global from "../../assets/img/Global.png"
import { HeaderContainer, ImgLogo, TitleLogo } from "./HeaderStyled"

export const Header =()=>{
  return(
    <HeaderContainer>
      <ImgLogo src={global} alt="Icone do Logo" />
      <TitleLogo>HUBusca</TitleLogo>
    </HeaderContainer>
  )
}