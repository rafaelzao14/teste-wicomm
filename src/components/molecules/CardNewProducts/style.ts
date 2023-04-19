import styled from "styled-components";
import { PALLET_COLORS } from "../../../configs/colors/pallet_colors";

type Text_Props = {
    fontWeight: number;
    fontSize: number;
    lineHeight: number;
    color: string;
    textTransform: string;
    textAlign?: string;
    marginLeft?: number;
}

type Dots_Props = {
    backgroundColor: string;
}


export const CardImage = styled.img`
    width: 165px;
    height:165px;
    margin-bottom: 24px;
`
export const ContainerCardIcon = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20px;
    height: 80px;
    gap: 16px;
    align-items: center;
    justify-content: center;
    margin-top: 22px;
    position:absolute;
    left:238px;
`

export const ContainerInfoCardNews = styled.div`
    width:100%;
    display: flex;
    flex-direction:column;
    gap: 16px;

`
export const ContainerHover = styled.div`
    width:277px;
    height: 100%;
    display: none;
    flex-direction:column;
    align-items: center;
    background-color:${PALLET_COLORS.Background};
    position: absolute;
    z-index:1;
    margin-top:92px;
    padding-top: 32px;
    transition: 3s ease-in-out;

`
export const ContainerButtonTastes = styled.div`
    width:80%;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    gap: 8px;
    margin: 8px;
    justify-content:center;

`
export const CardContainer = styled.div`
    width: 277px;
    height: 341px;
    border: 1px solid ${PALLET_COLORS.dark_colors.gray2};
    border-radius:4px;
    display:flex;
    flex-direction: column;
    &:hover{
        cursor: pointer;
        ${ContainerHover}{
        display: flex;
    }
    }
   

`

export const Typography = styled.h3<Text_Props>`
    font-style: normal;
    font-weight: ${props => props.fontWeight};
    font-size: ${props => props.fontSize}px;
    line-height: ${props => props.lineHeight}px;
    text-transform: ${props => props.textTransform};
    color: ${props => props.color};
    margin:0;
    margin-left:${props => props.marginLeft};
    text-align: ${props => props.textAlign};

`

export const ButtonCard = styled.button`
    width: 100px;
    height: 32px;
    border-radius:4;
    border: 1px solid ${PALLET_COLORS.dark_colors.gray1};
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &:hover{
        border-color:${PALLET_COLORS.primary.black1};
    }
`
export const ButtonSizes = styled.button`
    width: 60px;
    height: 22px;
    border-radius:4;
    border: 1px solid ${PALLET_COLORS.dark_colors.gray1};
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &:hover{
        border-color:${PALLET_COLORS.primary.black1};
    }
`
export const ButtonDotsColor = styled.button<Dots_Props>`
    width: 8px;
    height: 8px;
    border-radius:800rem;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.backgroundColor};
    &:hover{
        border-color:${PALLET_COLORS.primary.black1};
    }
`

export const ConfirmButton = styled.button`
    width: 100%;
    height: 40px;
    border: 1px solid ${PALLET_COLORS.primary.black1};
    border-radius:0;
    background-color: ${PALLET_COLORS.primary.orange1};
    margin-top: 62px;
`