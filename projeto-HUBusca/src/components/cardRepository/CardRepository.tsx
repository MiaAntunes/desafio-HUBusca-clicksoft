import React from "react"
import { IconSubtitle } from "../iconSubtitle/IconSubtitle"
import name from "../../assets/img/name.png"
import language from "../../assets/img/language.png"
import description from "../../assets/img/description.png"
import date from "../../assets/img/date.png"
import push from "../../assets/img/push.png"

export const CardRepository:React.FC<any> =()=>{
  return(
    <article>
      <div>
        <IconSubtitle image={name} text="props"/>
        <IconSubtitle image={language} text="props.linguagem"/>
      </div>
      <IconSubtitle image={description} text="props.description"/>
      <div>
        <IconSubtitle image={date} title="Data de Publicação" text="props"/>
        <IconSubtitle image={push} title="Último Push" text="props.linguagem"/>
      </div>
    </article>
  )
}