import styled from "styled-components";
import { PALLET_COLORS } from "../../../configs/colors/pallet_colors";


export const ContainerHeaderNavigation = styled.div`
    height: 72px;
    width:100%;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color:${PALLET_COLORS.primary.black1};
`
export const NavigationBar = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    margin-right: 16px;
    `
export const LogoExtendBlackSkull = styled.img`
    height: 100%;
    width: 166px;
    margin: 0 43px 0 56px;

`
export const ContainerIconsSide = styled.div`

    display: flex;
    width:100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding-inline: 9px;
`

export const IconHeaderButton = styled.button`
    border:none;
    background-color: ${PALLET_COLORS.primary.black1};
    outline:none;
    height:72px;
    width:30px;
    cursor:pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover{
    border:none;
    background-color: none;
    outline:none;
    }
    img{
        &:hover{
            transition: filter 0.2s ease-in-out;
            filter:brightness(1.5)
        }
    }
`