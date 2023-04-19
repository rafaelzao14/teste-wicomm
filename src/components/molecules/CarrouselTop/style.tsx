import styled from "styled-components";
import { PALLET_COLORS } from "../../../configs/colors/pallet_colors";


export const ContainerCarrousel = styled.div`
    width: 100%;
    height: 548px;
    background-color:${PALLET_COLORS.primary.orange2};
`
export const ButtonFillContact = styled.button`
    width: 124px;
    height: 40px;
    position:absolute;
    background-color:${PALLET_COLORS.primary.orange1};
    border: 1px solid ${PALLET_COLORS.dark_colors.Dark3};
    border-radius: 6px 6px 0px 6px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    color: ${PALLET_COLORS.primary.black1};
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    top:625px;
    left: 1116px;
    gap:4px;
`
export const ButtonBackTop = styled.button`
    width: 56px;
    height: 56px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    position: absolute;
    left: 1184px;
    top: 559px;
    outline: none;
    border: none;
    background-color:none;

`