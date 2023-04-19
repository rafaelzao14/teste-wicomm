import styled from "styled-components";
import { PALLET_COLORS } from "../../../configs/colors/pallet_colors";



export const CardCashBackContainer = styled.div`
    background-image:url('src/assets/cash_back.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 280px;
    width: 475px;
`


export const IconCurrence = styled.img`
    position: absolute;
    height: 180px;
    width: 180px;
    right: 100px;
    margin-top: 56px;
    transition: transform 0.3s ease;
    &:hover {
    transform: rotate(360deg);
  }
`
export const ButtonCash = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${PALLET_COLORS.primary.orange1};
    position:absolute;
    border-radius: 4px;
    margin: 158px 40px 0 40px;

`
