import React from 'react'
import { ContainerFooter, ContainerIconsWicomm, CopyrightText } from './style'

export default function MiniFooter() {
  return (
    <ContainerFooter>
      <CopyrightText> 
        Black Skull 2022. Todos os direitos reservados.
        </CopyrightText>
      <ContainerIconsWicomm>
        <img src='src/assets/icons/wicomm_icon.svg' alt='Wicomm Logo'/>
        <img src='src/assets/icons/vtex_icon.svg' alt='Vtex Logo'/>
      </ContainerIconsWicomm>
    </ContainerFooter>
  )
}
