import React from 'react'
import { ContainerCardContact, ContainerTitleContact, DescriptionContact, FieldInput, TypographyContact } from './style'
import { PALLET_COLORS } from '../../../../../configs/colors/pallet_colors'
import ButtonOrange from '../../../../atoms/ButtonOrange'

export default function CardContact() {
  return (
    <ContainerCardContact>
            <ContainerTitleContact>
                <TypographyContact fontColor={PALLET_COLORS.primary.white}>
                    fique por
                </TypographyContact>
                <TypographyContact fontColor={PALLET_COLORS.primary.orange1}>
                    dentro
                </TypographyContact>
            </ContainerTitleContact>

            <DescriptionContact>
            Inscreva-se e seja o primeiro a saber sobre as novidades, promoções e muito mais!
            </DescriptionContact>

        <FieldInput placeholder='Digite seu nome'/>
        <FieldInput placeholder='Digite seu email'/>
        <ButtonOrange label='Enviar'/>
    </ContainerCardContact>
  )
}
