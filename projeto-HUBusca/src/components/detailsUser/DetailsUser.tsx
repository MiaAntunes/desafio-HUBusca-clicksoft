import React from "react"
import { IconImage } from "../iconImage/IconImage"
import { IconSubtitle } from "../iconSubtitle/IconSubtitle"
import { CardRepository } from "../cardRepository/CardRepository"
import { useRequestData } from "../../hooks/useRequestData"



export const DetailsUser:React.FC<IUserGithub> =(props)=>{
  const [repoGithub, isLoading] = useRequestData({}, `/users/${props.login}/repos`)

  return(
    <div>
      <div>
        <IconImage image={props.avatar_url}/>
        <IconSubtitle  title="Nome:" text={props.name}/>
        <IconSubtitle  title="Login:" text={props.login}/>
      </div>
      <div>
        <IconSubtitle image="" title="Localização:" text={props.location}/>
        <IconSubtitle image="" title="Seguidores:" text={props.followers}/>
        <IconSubtitle image="" title="Repositórios Públicos:" text={props.public_repos}/>
      </div>
      <div>
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
      </div>
    </div>
  )
}