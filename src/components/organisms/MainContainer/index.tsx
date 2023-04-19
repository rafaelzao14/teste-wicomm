'use client';
import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export default function MainContainer({children}: Props) {
  return (
    <>{children}</>
  )
}
