import React from 'react'
import { CardSecurityContainer } from './style'
import TitleCardFooter from '../TitleCardFooter'

export default function CardSecurity() {
  return (
    <CardSecurityContainer>
        <TitleCardFooter text='Segurança'/>
        <img src='src/assets/icons/security_icons.svg' alt='Selos de segurança da página.'/>
    </CardSecurityContainer>
  )
}
