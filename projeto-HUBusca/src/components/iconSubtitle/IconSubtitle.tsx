
import React from "react"

interface ComponenteIcon {
  image?: string| void;
  title?: string| void;
  text:string
}

export const IconSubtitle:React.FC<ComponenteIcon> =(props)=>{
  return(
    <div>
      <img src="props.image" alt="" />
      <p>props</p>
    </div>
  )
}