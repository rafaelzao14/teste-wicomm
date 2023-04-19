import styled from "styled-components";
import { PALLET_COLORS } from "../../../../../configs/colors/pallet_colors";



export const BarContainer = styled.div`
    width: 216px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid ${PALLET_COLORS.dark_colors.Dark2};
    background-color:  ${PALLET_COLORS.dark_colors.Dark1};
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
    padding-left:16px;
`

export const InputSearchBarHeader = styled.input`
    border: none;
    background-color:  ${PALLET_COLORS.dark_colors.Dark1};
    outline:none;


    &::placeholder {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color:${PALLET_COLORS.dark_colors.gray1};
    }
`

export const SearchIcon = styled.img`
    width: 24px;
    height: 24px;
    border:none;
    outline:none;
    margin-right: 11px;
    &:hover{
    border:none;
    outline:none;
    cursor: pointer;
    color:${PALLET_COLORS.primary.white};

    }
`

export const CloseIcon = styled.img`
    width: 24px;
    height: 24px;
    border:none;
    outline:none;
    margin-right: 11px;
    &:hover{
    border:none;
    outline:none;
    cursor: pointer;
    }
`