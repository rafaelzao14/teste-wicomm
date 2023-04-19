import React from 'react'
import { ButtonCardBlog, ContainerCardBlog, ImageCardBlog, TypographyCardBlog } from './style'

type CardBlog_Props = {
  pathImage: string;
}

export default function CardBlog({pathImage}:CardBlog_Props) {
  return (
    <ContainerCardBlog>
      <ImageCardBlog src={pathImage}/>
      <TypographyCardBlog>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      </TypographyCardBlog>
      <ButtonCardBlog>
        LER MAIS
      </ButtonCardBlog>
    </ContainerCardBlog>
  )
}
