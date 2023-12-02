import React from "react"
import { IconSubtitle } from "../iconSubtitle/IconSubtitle"
import name from "../../assets/img/name.png"
import language from "../../assets/img/language.png"
import description from "../../assets/img/description.png"
import date from "../../assets/img/date.png"
import push from "../../assets/img/push.png"

export const CardRepository:React.FC<IRepositoryGithub> =(props)=>{
 
  return(
    <article>
      <div>
        <IconSubtitle image={name} title="Nome:" text={props.name}/>
        <IconSubtitle image={language} title="Linguagem:" text={props.language}/>
      </div>
      <IconSubtitle image={description} title="Descrição:" text={props.description}/>
      <div>
        <IconSubtitle image={date} title="Data de Publicação:" text={props.created_at}/>
        <IconSubtitle image={push} title="Último Push:" text={props.pushed_at}/>
      </div>
      <a href={props.svn_url} target="_blank">Link para o Repositório</a>
    </article>
  )
}