import styled from "styled-components";
import { PALLET_COLORS } from "../../../configs/colors/pallet_colors";


type CardObjective_Props = {
    pathImage: string;
}
export const ContainerCardObjective = styled.div`
    width:100%;
    height: 400px;
    display: flex;
    flex-direction: row;
    gap: 32px;
    padding: 0 56px 0 56px;
`
export const CardObjective = styled.div<CardObjective_Props>`
    background-image:url(${props => props.pathImage});
    background-repeat: no-repeat;
    background-size: cover;
    height: 340px;
    width: 277px;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content:end;
`

export const LabelButton = styled.p`
    font-size: 14px;
    font-style: italic;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    text-transform: uppercase;
`
export const ButtonObjectives = styled.button`
    height: 40px;
    width: 222px;
    background: ${PALLET_COLORS.primary.orange1};
    border-radius: 0;
    clip-path: polygon(0 18%, 100% 18%, 92% 100%, 0% 100%);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    &:hover{
        width: 232px;
        background: ${PALLET_COLORS.primary.orange2};
    }
`