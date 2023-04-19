import React from 'react'
import { ContainerHeaderNavigation, ContainerIconsSide, IconHeaderButton, LogoExtendBlackSkull, NavigationBar } from './style'
import { ButtonNav } from './components/ButtonNavigation/style'
import ButtonNavigation from './components/ButtonNavigation'
import { BUTTONS_INFO_HEADER } from '../../../mocks/content_buttons'
import SearchBarHeader from './components/SearchBarHeader'

export default function HeaderNavigation() {
  return (
    <ContainerHeaderNavigation>
        <LogoExtendBlackSkull src="src\assets\Logo.png"/>
        <NavigationBar>
            {
                BUTTONS_INFO_HEADER.map((item, index) => {
                    return (
                        <ButtonNavigation label={item.label} key={index} />
                    )
                })
            }
        </NavigationBar>
        <SearchBarHeader />
        <ContainerIconsSide>
            <IconHeaderButton>
                <img width="24" height="24" src="src\assets\icons\user_icon.png" alt='Icone de usuário'/>
            </IconHeaderButton>

            <IconHeaderButton>
                <img width="24" height="24" src="src\assets\icons\favorite_icon.png" alt='Icone de Estrela para Favoritar'/>
            </IconHeaderButton>

            <IconHeaderButton>   
                <img width="24" height="24" src="src\assets\icons\shoppingCart_icon.png" alt='Icone de carrinho de compra.'/>
            </IconHeaderButton>
        </ContainerIconsSide>



    </ContainerHeaderNavigation>
  )
}
