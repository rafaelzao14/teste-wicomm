import styled from "styled-components";
import { PALLET_COLORS } from "../../../configs/colors/pallet_colors";



export const InfoContainer = styled.div`
    height: 278px;
    width: 643px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    margin: 0 56px 0 56px;
    background-image:url('src/assets/icons/logo_opacity.svg');
    background-position:top;
    background-repeat: no-repeat;
`

export const TypographyText = styled.p`
    width: 643px;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: ${PALLET_COLORS.dark_colors.Dark2};
`