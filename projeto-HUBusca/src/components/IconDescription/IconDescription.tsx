import React from "react";
import { ContainerDescription, SpanImage } from "./IconDescriptionStyled";
import { Image, Text, Title } from "../iconSubtitle/IconSubtitleStyled";
interface ComponenteIcon {
  image?: string | false;
  title: string;
  text: string | null | number;
}

export const IconDescription: React.FC<ComponenteIcon> = ({
  image,
  title,
  text,
}) => {
  return (
    <ContainerDescription>
      <SpanImage>
        { image !== false &&
        <Image src={image} alt="" />}
        <Title>{title}</Title>
      </SpanImage>
      <Text>{text}</Text>
    </ContainerDescription>
  );
};
