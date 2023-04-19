import React from 'react'
import { ButtonNav, LabelButtonNav } from './style'

type Btn_Header_Props = {
  url?: string;
  label: string;
}

export default function ButtonNavigation(content: Btn_Header_Props) {
  return (
    <ButtonNav>
       <LabelButtonNav>
        {content.label.toUpperCase()}
       </LabelButtonNav>
    </ButtonNav>
  )
}
