
import React from "react"

interface ComponenteIcon {
  image?: string| void;
  title: string;
  text: string | null | number;
}

export const IconSubtitle:React.FC<ComponenteIcon> =({image,title,text})=>{
  return(
    <div>
      <img src="props.image" alt="" />
      <p>{title}</p>
      <p>{text}</p>
    </div>
  )
}