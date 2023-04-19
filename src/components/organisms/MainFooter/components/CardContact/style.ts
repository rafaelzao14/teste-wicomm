import styled from "styled-components";
import { PALLET_COLORS } from "../../../../../configs/colors/pallet_colors";

type CardContact_Props = {
    fontColor: string;
}

export const ContainerCardContact = styled.div`
    width: 353px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    border-left: 1px solid ${PALLET_COLORS.dark_colors.gray2}
`
export const FieldInput = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 13px 16px;
    gap: 10px;
    background: ${PALLET_COLORS.dark_colors.Dark1};
    border: 1px solid ${PALLET_COLORS.dark_colors.Dark3};
    border-radius: 4px;
`
export const DescriptionContact = styled.p`
    width:260px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: ${PALLET_COLORS.dark_colors.gray1};
`
export const ContainerTitleContact = styled.span`
    width:200px;
    height:80px;
    display: flex;
    flex-direction: column;
    gap:0;
    padding:0;
    margin: 0;
`
export const TypographyContact = styled.h3<CardContact_Props>`
    font-style: italic;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    text-transform: uppercase;
    color: ${props => props.fontColor};
    margin:0;
`