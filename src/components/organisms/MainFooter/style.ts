import styled from "styled-components";
import { PALLET_COLORS } from "../../../configs/colors/pallet_colors";


export const FooterMain = styled.footer`
    height: 500px;
    width: 100%;
    background-color: ${PALLET_COLORS.primary.black1};
    border-bottom: 1px solid ${PALLET_COLORS.dark_colors.gray2};
    display: flex;
    flex-direction: row;
    gap:32px;
    
`