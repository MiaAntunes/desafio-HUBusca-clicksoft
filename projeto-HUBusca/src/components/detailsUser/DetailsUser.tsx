import React from "react"
import { IconImage } from "../iconImage/IconImage"
import { IconSubtitle } from "../iconSubtitle/IconSubtitle"
import { CardRepository } from "../cardRepository/CardRepository"

export const DetailsUser:React.FC<any> =()=>{
  return(
    <div>
      <div>
        <IconImage image=""/>
        <IconSubtitle image="" title="Nome:" text="props"/>
        <IconSubtitle image="" title="Login:" text="props"/>
      </div>
      <div>
        <IconSubtitle image="" title="Localização:" text="props"/>
        <IconSubtitle image="" title="Seguidores:" text="props"/>
        <IconSubtitle image="" title="Repositórios Públicos:" text="props"/>
      </div>
      <div>
          !! outro map
        <CardRepository name="props" linguage="props" description="" date="props" push="props"  />
      </div>
    </div>
  )
}