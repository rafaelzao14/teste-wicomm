import React from 'react'
import { ButtonCard, ButtonDotsColor, ButtonSizes, CardContainer, CardImage, ConfirmButton, ContainerButtonTastes, ContainerCardIcon, ContainerHover, ContainerInfoCardNews, Typography } from './style'
import { PALLET_COLORS } from '../../../configs/colors/pallet_colors'

type Card_Props = {
  typeCard: string;
}

export default function CardNewProducts({typeCard}:Card_Props) {
  return (
    <CardContainer>
      <>
      <CardImage src="src\assets\images\lancamentos.svg"/>
      <ContainerCardIcon>
        <img src="src\assets\icons\favorite_icon.svg" alt='Icone de Estrela para favoritar'/>
        <img src="src\assets\icons\shop_cart_icon.svg" alt='Icone de carrinho de compras'/>
      </ContainerCardIcon>
      
      </>
      <ContainerInfoCardNews>
        <Typography color={PALLET_COLORS.primary.black1} fontSize={12} fontWeight={600} lineHeight={16} textTransform={'uppercase'}>
          whey zero(com lactase)<br/> 
          black skull - 900g
        </Typography>
        <Typography color={PALLET_COLORS.primary.orange1} fontSize={22} fontWeight={700} lineHeight={26} textTransform={'uppercase'} marginLeft={24}>
          R$349,90
        </Typography>
        <Typography color={PALLET_COLORS.dark_colors.Dark3} fontSize={14} fontWeight={400} lineHeight={17} textTransform={'lowercase'} marginLeft={24}>
          ou 12x de 29,16
        </Typography>
      </ContainerInfoCardNews>
      <ContainerHover>
        
          {
            typeCard.toLocaleLowerCase() === 'sabores' ? (
              <>
        <Typography color={PALLET_COLORS.primary.black1} fontSize={18} fontWeight={600} lineHeight={16} textTransform={'uppercase'} marginLeft={24}>
          Sabor
        </Typography>
        <ContainerButtonTastes>
          <ButtonCard>
            <Typography color={PALLET_COLORS.dark_colors.gray1} fontSize={12} fontWeight={600} lineHeight={16} textTransform={'uppercase'} textAlign={'center'} marginLeft={0}>
              Toffe
            </Typography>
          </ButtonCard>
          <ButtonCard>
          <Typography color={PALLET_COLORS.dark_colors.gray1} fontSize={12} fontWeight={600} lineHeight={16} textTransform={'uppercase'} textAlign={'center'} marginLeft={0}>
              Chocolate
            </Typography>
          </ButtonCard>
          <ButtonCard>
          <Typography color={PALLET_COLORS.dark_colors.gray1} fontSize={12} fontWeight={600} lineHeight={16} textTransform={'uppercase'} textAlign={'center'} marginLeft={0}>
              Morango
            </Typography>
          </ButtonCard>
          <ButtonCard>
          <Typography color={PALLET_COLORS.dark_colors.gray1} fontSize={12} fontWeight={600} lineHeight={16} textTransform={'uppercase'} textAlign={'center'} marginLeft={0}>
              Baunilha
            </Typography>
          </ButtonCard>
        </ContainerButtonTastes>
        <ConfirmButton>
        <Typography color={PALLET_COLORS.primary.black1} fontSize={18} fontWeight={600} lineHeight={16} textTransform={'uppercase'} marginLeft={24}>
          Confirmar
        </Typography>
        </ConfirmButton>
              </>
            ) : 
        (<>
        <Typography color={PALLET_COLORS.primary.black1} fontSize={18} fontWeight={600} lineHeight={16} textTransform={'uppercase'} marginLeft={24}>
          Tamanho
        </Typography>
        <ContainerButtonTastes>
          <ButtonSizes>
            <Typography color={PALLET_COLORS.dark_colors.gray1} fontSize={8} fontWeight={600} lineHeight={16} textTransform={'uppercase'} textAlign={'center'} marginLeft={0}>
              p
            </Typography>
          </ButtonSizes>
          <ButtonSizes>
          <Typography color={PALLET_COLORS.dark_colors.gray1} fontSize={8} fontWeight={600} lineHeight={16} textTransform={'uppercase'} textAlign={'center'} marginLeft={0}>
              m
            </Typography>
          </ButtonSizes>
          <ButtonSizes>
          <Typography color={PALLET_COLORS.dark_colors.gray1} fontSize={8} fontWeight={600} lineHeight={16} textTransform={'uppercase'} textAlign={'center'} marginLeft={0}>
              g
            </Typography>
          </ButtonSizes>
          <ButtonSizes>
          <Typography color={PALLET_COLORS.dark_colors.gray1} fontSize={8} fontWeight={600} lineHeight={16} textTransform={'uppercase'} textAlign={'center'} marginLeft={0}>
              gg
            </Typography>
            </ButtonSizes>
            <ButtonSizes>
            <Typography color={PALLET_COLORS.dark_colors.gray1} fontSize={8} fontWeight={600} lineHeight={16} textTransform={'uppercase'} textAlign={'center'} marginLeft={0}>
              exgg2
            </Typography>
            </ButtonSizes>
            <ButtonSizes>
            <Typography color={PALLET_COLORS.dark_colors.gray1} fontSize={8} fontWeight={600} lineHeight={16} textTransform={'uppercase'} textAlign={'center'} marginLeft={0}>
              exgg2
            </Typography>
            
          </ButtonSizes>
              <ButtonDotsColor backgroundColor='#cc265e'/>
              <ButtonDotsColor backgroundColor='#2578cc'/>
              <ButtonDotsColor backgroundColor='#25cc73'/>
              <ButtonDotsColor backgroundColor='#ccb625'/>
              
        </ContainerButtonTastes>
        <ConfirmButton>
            <Typography color={PALLET_COLORS.primary.black1} fontSize={18} fontWeight={600} lineHeight={16} textTransform={'uppercase'} marginLeft={24}>
                  Confirmar
            </Typography>
          </ConfirmButton>
            </>)
          }
        

      </ContainerHover>
    </CardContainer>
  )
}
