import React from 'react'
import { ButtonReadAll, ContainerCardTeam, ContainerCarrouselTeam } from './style'
import { ButtonLinkCardTeam, CardHoverTeam, CardTeam, TypographyCardTeam } from './components/CardTeam/style'
import { PALLET_COLORS } from '../../../configs/colors/pallet_colors'
import { Carousel } from 'react-responsive-carousel'
import CardTeamAthlete from './components/CardTeam'

export default function CarrouselTeam() {
  return (
    <ContainerCarrouselTeam>
        <ContainerCardTeam>
        <Carousel showArrows showIndicators={false} showStatus={false} centerMode centerSlidePercentage={30}>
            <CardTeamAthlete pathImage='src/assets/team/people1.svg'/>
            <CardTeamAthlete pathImage='src/assets/team/people2.svg'/>
            <CardTeamAthlete pathImage='src/assets/team/people3.svg'/>
        </Carousel>
        </ContainerCardTeam>

       <ButtonReadAll>
        VER TODOS
       </ButtonReadAll>
    </ContainerCarrouselTeam>
  )
}
