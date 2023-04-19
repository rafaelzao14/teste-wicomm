import styled from "styled-components";
import { PALLET_COLORS } from "../../../configs/colors/pallet_colors";


export const ContainerMainMiniTopHeader = styled.div`
    width: 100%;
    height: 32px;
    background-color: ${PALLET_COLORS.dark_colors.Dark1};
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    
`

export const TypographyMiniTopHeader = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 14.4px;
    color:${PALLET_COLORS.primary.orange1};
    margin: 9px 56px 9px 56px;
`

export const ContainerFrete = styled.div`
    width: 300px;
    height: 32px;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const InfoFrete = styled.p`
    font-size: 10px;
    font-weight: 500;
    line-height:12px;
    color: ${PALLET_COLORS.dark_colors.gray2}
`