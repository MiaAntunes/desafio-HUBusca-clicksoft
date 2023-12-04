import React from "react"
import { IconImage } from "../iconImage/IconImage"
import { IconSubtitle } from "../iconSubtitle/IconSubtitle"
import { CardRepository } from "../cardRepository/CardRepository"
import { useRequestData } from "../../hooks/useRequestData"
import { ContainerDetailsUser, ContainerOne, ContainerThree, ContainerTwo } from "./DetailsUserStyled"

import location from "../../assets/img/location.png"
import followed from "../../assets/img/followed.png"
import repo from "../../assets/img/repo.png"


export const DetailsUser:React.FC<IUserGithub> =(props)=>{
  const [repoGithub, isLoading] = useRequestData({}, `/users/${props.login}/repos`)

  return(
    <ContainerDetailsUser>
      <ContainerOne>
        <IconImage image={props.avatar_url}/>
        <div>
        <IconSubtitle image={false}  title="Nome:" text={props.name}/>
        <IconSubtitle image={false}  title="Login:" text={props.login}/>
        </div>
      </ContainerOne>
      <ContainerTwo>
        <IconSubtitle image={location} title="Localização:" text={props.location}/>
        <IconSubtitle image={followed} title="Seguidores:" text={props.followers}/>
        <IconSubtitle image={repo} title="Repositórios Públicos:" text={props.public_repos}/>
      </ContainerTwo>
      <ContainerThree>
      {isLoading === true ? (
        <>
          <iframe src="https://giphy.com/embed/hWZBZjMMuMl7sWe0x8" width="480" height="360"  className="giphy-embed" allowFullScreen></iframe>
          <p><a href="https://giphy.com/gifs/wait-loading-attente-hWZBZjMMuMl7sWe0x8">via GIPHY</a></p>
        </>
      ) : (
        // Verifique se repoGithub não está vazio antes de mapeá-lo
        repoGithub.length > 0 ? (
          repoGithub.map((repository: IRepositoryGithub, index: number) => (
            <CardRepository {...repository} key={index} />
          ))
        ) : (
          <p>Nenhum repositório encontrado.</p>
        )
      )}
      </ContainerThree>
    </ContainerDetailsUser>
  )
}