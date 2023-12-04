import React from "react"
import { IconSubtitle } from "../iconSubtitle/IconSubtitle"
import name from "../../assets/img/name.png"
import language from "../../assets/img/language.png"
import description from "../../assets/img/description.png"
import date from "../../assets/img/date.png"
import push from "../../assets/img/push.png"
import { ArticleContainer, ContainerDate, ContainerTitle, LinkRepo } from "./CardRepositoryStyled"
import { IconDescription } from "../IconDescription/IconDescription"
import { format } from "date-fns"

export const CardRepository:React.FC<IRepositoryGithub> =(props)=>{
  const created_at = new Date(props.created_at)
  const createdAtFormat = format(created_at, "dd/MM/yyyy")

  const pushed_at = new Date(props.pushed_at)
  const pushedAtFormat = format(pushed_at, "dd/MM/yyyy")

 
  return(
    <ArticleContainer>
      <ContainerTitle>
        <IconSubtitle image={name} title="Nome:" text={props.name}/>
        <IconSubtitle image={language} title="Linguagem:" text={props.language}/>
      </ContainerTitle>
      <IconDescription image={description} title="Descrição:" text={props.description}/>
      <ContainerDate>
        <IconSubtitle image={date} title="Data de Publicação:" text={createdAtFormat}/>
        <IconSubtitle image={push} title="Último Push:" text={pushedAtFormat}/>
      </ContainerDate>
      <LinkRepo href={props.svn_url} target="_blank">Link para o Repositório</LinkRepo>
    </ArticleContainer>
  )
}