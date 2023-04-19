import styled from "styled-components";
import { PALLET_COLORS } from "../../../../../configs/colors/pallet_colors";



export const SingleSlide = styled.div`
    background-image: url("src/assets/images/main_image_top.svg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 548px;
`

export const ButtonCheckSlide = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 24px;
    gap: 10px;

    position: absolute;
    width: 120px;
    height: 48px;
    left: 155px;
    top: 364px;

    background: ${PALLET_COLORS.primary.orange1};
    border-radius: 4px;
    color:${PALLET_COLORS.primary.black1};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`