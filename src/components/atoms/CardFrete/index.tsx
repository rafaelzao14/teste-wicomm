import React from 'react'
import { ButtonFrete, CardFreteContainer, IconPackage } from './style'

export default function CardFrete() {
  return (
    <CardFreteContainer>
        <IconPackage src='src/assets/icons/package_icon.png' alt='Icone Embalagem de Envio.'/>
        <ButtonFrete>
          Consulte
        </ButtonFrete>
    </CardFreteContainer>
  )
}
