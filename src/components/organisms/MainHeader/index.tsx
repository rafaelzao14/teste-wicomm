import React, { ReactNode } from 'react'
import { HeaderContainer } from './style'


type Header_Props = {
    children: ReactNode
}
export default function MainHeader({children}: Header_Props) {
  return (
    <HeaderContainer>
        {children}
    </HeaderContainer>
  )
}
