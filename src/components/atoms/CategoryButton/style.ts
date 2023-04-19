import styled from "styled-components";
import { PALLET_COLORS } from "../../../configs/colors/pallet_colors";

export const ContainerCategory = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ContainerButton = styled.button`
    height: 178px;
    width: 178px;
    background-color: ${PALLET_COLORS.dark_colors.gray2};
    border-radius:600px;
    border-width: 5px;
    border-color:  ${PALLET_COLORS.dark_colors.gray2};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`;


export const CategoryImage = styled.img`
    height: 108px;
    width: 108px;
    transition: transform 0.3s ease-in-out;   
`

export const HoverContainer = styled(ContainerButton)`
  &:hover {
    background-color:${PALLET_COLORS.primary.orange1};
    border-color:${PALLET_COLORS.primary.orange2};
    border-width: 5px;
    transition: transform 0.9s ease-in-out; 

    ${CategoryImage}{
    transform: scale(1.6);
  }
  }
`;

export const TitleCategory = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    align-self: center;
    margin-top: 16px;
`