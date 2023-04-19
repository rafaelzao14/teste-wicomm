import React from 'react'
import { ContainerCarrouselNewProducts } from './style'
import { Carousel } from 'react-responsive-carousel'
import CardNewProducts from '../CardNewProducts'


export default function CarrouselNewProducts() {
  return (
    <ContainerCarrouselNewProducts>
        <Carousel showArrows showIndicators={false} showStatus={false} centerMode centerSlidePercentage={25}>
        <CardNewProducts typeCard='sabores'/>
        <CardNewProducts typeCard='sabores'/>
        <CardNewProducts typeCard=''/>
        <CardNewProducts typeCard=''/>
        </Carousel>
    </ContainerCarrouselNewProducts>
  )
}
