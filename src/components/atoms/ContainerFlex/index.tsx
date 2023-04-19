import React, { ReactNode } from 'react'
import { ContainerFlexGeneral } from './style'

type Container_Props = {
    children: ReactNode;
    heightSize: number;
}
export default function ContainerFlex({children, heightSize}: Container_Props) {
  return (
    <ContainerFlexGeneral height={heightSize}>
        {children}
    </ContainerFlexGeneral>
  )
}
