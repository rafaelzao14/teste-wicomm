import React from 'react'
import { ContainerCardBlog, ContainerCarrouselBlog } from './style'
import { Carousel } from 'react-responsive-carousel'
import CardBlog from './components'

export default function CarrouselBlog() {
  return (
    <ContainerCarrouselBlog>
        <ContainerCardBlog>
            <Carousel showArrows showIndicators={false} showStatus={false} centerMode centerSlidePercentage={35}>
                    <CardBlog pathImage='src/assets/blog/image1.svg'/>
                    <CardBlog pathImage='src/assets/blog/image2.svg'/>
                    <CardBlog pathImage='src/assets/blog/image3.svg'/>
            </Carousel>
        </ContainerCardBlog>
    </ContainerCarrouselBlog>
  )
}
