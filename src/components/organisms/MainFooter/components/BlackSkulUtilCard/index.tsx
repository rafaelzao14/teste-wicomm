import React from 'react'
import { CardBlackSkullUsaContainer, ContainerLinks, LabelLink } from './style'
import TitleCardFooter from '../TitleCardFooter'
import { LABEL_LINKS_USA, Label_Props } from '../../../../../mocks/labels_link'

type Card_Props = {
    labels?: Label_Props[]
    title: string;
}
export default function BlackSkullCard({labels, title}: Card_Props) {

  return (
    <CardBlackSkullUsaContainer>
        <TitleCardFooter text={title}/>
        <ContainerLinks>
        {
            labels?.map((item, index) => <LabelLink key={index}>{item.label}</LabelLink>)
        }
        </ContainerLinks>

    </CardBlackSkullUsaContainer>
  )
}
