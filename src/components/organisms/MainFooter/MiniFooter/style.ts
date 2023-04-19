import styled from "styled-components";
import { PALLET_COLORS } from "../../../../configs/colors/pallet_colors";


export const ContainerFooter = styled.div`
    width:100%;
    height: 88px;
    background-color: ${PALLET_COLORS.primary.black1};
    border-top-width: 1px;
    border-color: ${PALLET_COLORS.primary.white};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px 0 8px;
`

export const ContainerIconsWicomm = styled.div`
    width:250px;
    height:100%;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
    gap: 32px;
`

export const CopyrightText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${PALLET_COLORS.primary.white};
`