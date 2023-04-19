import React from 'react'
import { ContainerCarrouselCategory } from './style'
import { Carousel } from 'react-responsive-carousel'
import { CATEGORIES } from '../../../mocks/carrousel_categories'
import CategoryButton from '../../atoms/CategoryButton'

export default function CarrouselCategories() {
    
  return (
    <ContainerCarrouselCategory>
        <Carousel showArrows showIndicators={false} showStatus={false} centerMode centerSlidePercentage={18}>
            {
                CATEGORIES.map((item, index) => {
                    return (
                        <CategoryButton key={index} img={item.img} title={item.name}/>
                    )
                })
            }
        </Carousel>
    </ContainerCarrouselCategory>
  )
}
