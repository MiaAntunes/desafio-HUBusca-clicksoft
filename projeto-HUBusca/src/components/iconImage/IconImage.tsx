import React from "react"
import Avatar from '@mui/material/Avatar';

interface ComponenteImage{
  image: any;
}

export const IconImage:React.FC<ComponenteImage> =({image})=>{
  return(
    <Avatar
        alt="Remy Sharp"
        src={image}
        sx={{ width: 56, height: 56 }}
    />
  )
}
