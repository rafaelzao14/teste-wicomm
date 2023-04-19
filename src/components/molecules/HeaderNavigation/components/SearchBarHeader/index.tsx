import React, { useState } from 'react'
import { BarContainer, CloseIcon, InputSearchBarHeader, SearchIcon } from './style'

export default function SearchBarHeader() {
    const [isTyping, setIsTyping] = useState(false)
  
  return (
    <BarContainer>
        <InputSearchBarHeader placeholder={!isTyping ? 'Buscar' : ''} type={'search'} onFocus={() => setIsTyping(true)} />
        {
            isTyping ?        
            (<CloseIcon onClick={() => setIsTyping(false)} src="src\assets\icons\close_icon.svg"/>) :
            (<SearchIcon src="src\assets\icons\search_icon.svg"/>)
           
        }
    </BarContainer>
  )
}
