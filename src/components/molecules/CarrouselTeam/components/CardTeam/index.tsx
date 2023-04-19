import React from 'react'
import { PALLET_COLORS } from '../../../../../configs/colors/pallet_colors'
import { CardTeam, CardHoverTeam, TypographyCardTeam, ButtonLinkCardTeam } from './style'

type CardTeam_Props = {
    pathImage: string;
}
export default function CardTeamAthlete({pathImage}:CardTeam_Props) {
  return (
    <CardTeam pathImg={pathImage}>
            <CardHoverTeam>
                <TypographyCardTeam fontColor={PALLET_COLORS.primary.orange1} italic={'italic'} fontSize={16}>
                    Cedric McMillan
                </TypographyCardTeam>
                <hr/>
                <ButtonLinkCardTeam>
                    <TypographyCardTeam fontColor={PALLET_COLORS.primary.white} italic={'none'} fontSize={12}>
                        Mais informações ...
                    </TypographyCardTeam>
                </ButtonLinkCardTeam>
               
            </CardHoverTeam>
    </CardTeam>
  )
}
