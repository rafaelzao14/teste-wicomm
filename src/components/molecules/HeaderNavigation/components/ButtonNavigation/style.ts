import styled from "styled-components";
import { PALLET_COLORS } from "../../../../../configs/colors/pallet_colors";


export const LabelButtonNav = styled.p`
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    text-align: center;
    color:${PALLET_COLORS.dark_colors.gray2};

`
export const ButtonNav = styled.button`
    width:103px;
    height: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border:none;
    border-radius:0;
    border-bottom:5px solid ${PALLET_COLORS.primary.black1};
    background-color: ${PALLET_COLORS.primary.black1};
    transition: border-bottom-width 0.3s ease-in-out;
    &:hover {
    border-bottom-width:5px solid;
    border-bottom-color:${PALLET_COLORS.primary.orange1};
    background-color:${PALLET_COLORS.dark_colors.Dark3};
    ${LabelButtonNav}{
        color:${PALLET_COLORS.primary.white};
        font-weight: 500;
    }
  }
`

