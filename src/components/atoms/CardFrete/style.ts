import styled from "styled-components";
import { PALLET_COLORS } from "../../../configs/colors/pallet_colors";



export const CardFreteContainer = styled.div`
    background-image:url('src/assets/frete_card.png');
    background-size: cover;
    background-repeat: no-repeat;
    height: 280px;
    width: 475px;
`


export const IconPackage = styled.img`
    position: absolute;
    height: 180px;
    width: 180px;
    left: 480px;
    margin-top: 56px;
    transition: transform 0.3s ease;
    &:hover {
    transform: rotate(360deg);
    }
    
`

export const ButtonFrete = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${PALLET_COLORS.primary.orange1};
    position:absolute;
    border-radius: 4px;
    margin: 158px 40px 0 40px;

`