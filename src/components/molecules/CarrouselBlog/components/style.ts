import styled from "styled-components";
import { PALLET_COLORS } from "../../../../configs/colors/pallet_colors";




export const ImageCardBlog = styled.img`
    height: 200px;
    width: 376px;

`

export const TypographyCardBlog = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color:${PALLET_COLORS.primary.white};
`

export const ButtonCardBlog = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 24px;
    gap: 10px;
    background: ${PALLET_COLORS.primary.orange1};
    border-radius: 4px;
`

export const ContainerCardBlog = styled.div`
    height: 380px;
    width: 376px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding-bottom:8px;
    align-items:center;
    background: ${PALLET_COLORS.dark_colors.Dark1};
    border: 1px solid ${PALLET_COLORS.dark_colors.Dark3};
    &:hover{
        background: ${PALLET_COLORS.dark_colors.Dark2};
    }
`   
