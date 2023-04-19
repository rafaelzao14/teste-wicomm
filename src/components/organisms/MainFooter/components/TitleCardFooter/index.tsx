import React from 'react'
import { TitleCardFooterTypography } from './style'


type Title_Props = {
    text: string;
}
export default function TitleCardFooter({text}: Title_Props) {
  return (
    <TitleCardFooterTypography>
        {text}
    </TitleCardFooterTypography>
  )
}
