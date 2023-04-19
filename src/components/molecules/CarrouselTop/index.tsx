import React from 'react'

import { ButtonBackTop, ButtonFillContact, ContainerCarrousel } from './style';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SlidesTop from './components/SlidesTop';
import SlideTop from './components/SlidesTop';

export default function CarrouselTop() {

  return (
        <ContainerCarrousel>
        <Carousel showIndicators showStatus={false} dynamicHeight>
            <SlideTop />
            <SlideTop />
        </Carousel>
        <ButtonBackTop>
            <img src="src\assets\icons\back_top_icon.png" alt='Botão com flecha para cima para voltar ao topo da página.'/>
        </ButtonBackTop>
        <ButtonFillContact>
            <img src="src\assets\icons\chat_icon.png" alt='Icone de Chat.'/>
            Fale Conosco
            </ButtonFillContact>            
        </ContainerCarrousel>
  )
}
