import styled from "styled-components";
import { PALLET_COLORS } from "../../../../../configs/colors/pallet_colors";
import { ReactNode } from "react";

type Card_Props = {
    pathImg: string;
}
type Text_Props = {
    fontColor: string;
    fontSize: number;
    italic: string;
    children: ReactNode;

}
export const CardHoverTeam = styled.div`
    width:277px;
    height:100px;
    background-color: rgba(0, 0, 0, 0.7);
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const TypographyCardTeam = styled.h3<Text_Props>`
    font-size:${props => props.fontSize}px;
    color:${props => props.fontColor};
    font-style:${props => props.italic};
    text-transform: uppercase;

`

export const ButtonLinkCardTeam = styled.button`
    width:200px;
    height:32px;
    background-color: transparent;
    display: flex;
    align-items: center;
    border:0px;
    &:hover{
        outline: 0;
        outline-style: none;
        border:0px;
        ${TypographyCardTeam}{
            text-decoration:underline;
        }
    }
`
export const CardTeam = styled.div<Card_Props>`
    width:277px;
    height:294px;
    background-image:url(${props => props.pathImg});
    background-size:cover;
    background-repeat:no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &:hover{
        ${CardHoverTeam}{
            display:flex;
        }
    }
`

