import React from 'react'
import { FooterMain } from './style'
import CardSocialMedia from './components/CardSocialMedia'
import { LABEL_LINKS_AFILIADOS, LABEL_LINKS_INSTITUCIONAL, LABEL_LINKS_USA } from '../../../mocks/labels_link'
import CardContact from './components/CardContact'
import BlackSkullCard from './components/BlackSkulUtilCard'
import CardPayment from './components/CardPayment'
import CardSecurity from './components/CardSecurity'
import MiniFooter from './MiniFooter'

export default function MainFooter() {
  return (
    <>
    <FooterMain>
        <CardSocialMedia />
        <BlackSkullCard labels={LABEL_LINKS_USA} title='Black Skull Usa' />
        <BlackSkullCard labels={LABEL_LINKS_INSTITUCIONAL} title='Institucional' />
        <BlackSkullCard labels={LABEL_LINKS_AFILIADOS} title='Afiliados' />
        <CardPayment/>
        <CardSecurity/>
        <CardContact />
    </FooterMain>
    </>

  )
}
