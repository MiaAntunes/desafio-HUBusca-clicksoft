import React from "react"
import { IconImage } from "../iconImage/IconImage"
import { IconSubtitle } from "../iconSubtitle/IconSubtitle"
import location from "../../assets/img/location.png"

const CardUser:React.FC<any> =({user})=>{
  return(
    <article>
      <div>
        <IconImage image={user.avatar_url} />
        <IconSubtitle title="Nome:" text={user.name} />
        <IconSubtitle title="Login:" text={user.login} />
      </div>
      <IconSubtitle image={location} title="Localização:" text={user.location} />
    </article>
  )
}

export default CardUser;