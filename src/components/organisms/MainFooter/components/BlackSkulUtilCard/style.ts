import styled from "styled-components";
import { PALLET_COLORS } from "../../../../../configs/colors/pallet_colors";

export const CardBlackSkullUsaContainer = styled.div`
    width:160px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 42px;
`
export const ContainerLinks = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 16px;
`
export const LabelLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: ${PALLET_COLORS.dark_colors.gray1};
    cursor: pointer;
`