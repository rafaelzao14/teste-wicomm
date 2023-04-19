import React from 'react'
import { ButtonGeneral } from './style';


type Button_Props = {
    label: string;
}
export default function ButtonOrange({label}: Button_Props) {
  return (
    <ButtonGeneral>
        {label}
    </ButtonGeneral>
  )
}
