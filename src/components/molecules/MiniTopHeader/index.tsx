import React from 'react'
import {  ContainerFrete, ContainerMainMiniTopHeader, InfoFrete, TypographyMiniTopHeader } from './style'


export default function MiniTopHeader() {
  return (
    <ContainerMainMiniTopHeader>
        <TypographyMiniTopHeader>
            Fale Conosco
        </TypographyMiniTopHeader>
        <ContainerFrete>
            <img src="src\assets\icons\truck_icon.png" alt='Icone de caminhão de frete.'/>
            <InfoFrete>
                FRETE GRÁTIS A PARTIR DE R$ 199,90 PARA TODO BRASIL
            </InfoFrete>
        </ContainerFrete>
        <TypographyMiniTopHeader>
            BLOG.BLACKSKULL
        </TypographyMiniTopHeader>
    </ContainerMainMiniTopHeader>
  )
}
