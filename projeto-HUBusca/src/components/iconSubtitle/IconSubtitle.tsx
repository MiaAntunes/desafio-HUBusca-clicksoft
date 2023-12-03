
import React from "react"
import { ContainerImage, ContainerSubtitle, Image, Text, Title } from "./IconSubtitleStyled";

interface ComponenteIcon {
  image?: string| void;
  title: string;
  text: string | null | number;
}

export const IconSubtitle:React.FC<ComponenteIcon> =({image,title,text})=>{
  return(
    <ContainerImage>
      <Image src={image} alt="" />
      <ContainerSubtitle>
      <Title>{title}</Title>
      <Text>{text}</Text>
      </ContainerSubtitle>
    </ContainerImage>
  )
}