import React from 'react'
import { ButtonCash, CardCashBackContainer, IconCurrence } from './style'

export default function CardCashBack() {
  return (
    <CardCashBackContainer>
        <IconCurrence src='src/assets/icons/CurrencyCircleDollar_icon.svg' alt='Icone S cifrão'/>
        <ButtonCash>
          Entenda
        </ButtonCash>
    </CardCashBackContainer>
  )
}
