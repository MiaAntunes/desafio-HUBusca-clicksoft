import React from "react"
import { IconImage } from "../iconImage/IconImage"
import { IconSubtitle } from "../iconSubtitle/IconSubtitle"
import location from "../../assets/img/location.png"

export const CardUser:React.FC<any> =()=>{
  return(
    <article>
      <div>
        <IconImage image="" />
        <IconSubtitle title="Nome:" text="" />
        <IconSubtitle title="Login:" text="" />
      </div>
      <IconSubtitle image={location} title="Localização:" text="" />
    </article>
  )
}