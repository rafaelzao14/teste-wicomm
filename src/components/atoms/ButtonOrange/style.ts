import styled from "styled-components";
import { PALLET_COLORS } from "../../../configs/colors/pallet_colors";


export const ButtonGeneral = styled.button`
    display: flex;
    width: 138px;
    height: 40px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${PALLET_COLORS.primary.orange1};
    border-radius: 4px;
`