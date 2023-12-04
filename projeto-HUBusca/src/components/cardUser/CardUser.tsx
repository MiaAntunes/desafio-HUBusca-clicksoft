import React from "react";
import { IconImage } from "../iconImage/IconImage";
import { IconSubtitle } from "../iconSubtitle/IconSubtitle";
import location from "../../assets/img/location.png";
import { ArticleContainer, ContainerUser } from "./CardUserStyled";

const CardUser: React.FC<any> = ({ user }) => {
  return (
    <ArticleContainer>
      <ContainerUser>
        <IconImage image={user.avatar_url} />
        <div>
          <IconSubtitle image={false} title="Nome:" text={user.name} />
          <IconSubtitle image={false} title="Login:" text={user.login} />
        </div>
      </ContainerUser>
      <IconSubtitle
        image={location}
        title="Localização:"
        text={user.location}
      />
    </ArticleContainer>
  );
};

export default CardUser;
