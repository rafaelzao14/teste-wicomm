import React from 'react'
import { CardPaymentContainer } from './style'
import TitleCardFooter from '../TitleCardFooter'

export default function CardPayment() {
  return (
    <CardPaymentContainer>
        <TitleCardFooter text='Formas de Pagamento' />
        <img src='src/assets/icons/flags_credit_icons.png' alt='Bandeiras de cartões de crédito.'/>
    </CardPaymentContainer>
  )
}
