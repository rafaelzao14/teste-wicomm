'use client';
import React from 'react'
import { CategoryImage, ContainerCategory, HoverContainer, TitleCategory  } from './style'


type ButtonCategoryProps = {
  img: string;
  title: string;
}

export default function CategoryButton(info:ButtonCategoryProps) {
  return (
    <ContainerCategory>
      <HoverContainer>
        <CategoryImage src={`${info.img}`}/>
      </HoverContainer>
      <TitleCategory>{info.title.toLocaleUpperCase()}</TitleCategory>
    </ContainerCategory>

  )
}
