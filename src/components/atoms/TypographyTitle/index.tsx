import React from 'react'
import { TitleBig } from './style'

type TypographyTitle_Props = {
    text: string
}

export default function TypographyTitle({text}: TypographyTitle_Props) {
  return (
    <TitleBig fontSize={32}>
        {text}
    </TitleBig>
  )
}
