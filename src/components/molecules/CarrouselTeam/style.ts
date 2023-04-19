import styled from "styled-components";
import { PALLET_COLORS } from "../../../configs/colors/pallet_colors";


export const ContainerCarrouselTeam = styled.div`
    width: 100%;
    height: 461px;
    background-image:url('src/assets/images/background_team.png');
    background-repeat: no-repeat;
    background-size:cover;
    display:flex;
    justify-content: center;
    margin: 100px 0 32px 0;
    justify-content: center;
    align-items: center;

`

export const ContainerCardTeam = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-top: 82px;
`

export const ButtonReadAll = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 14px 24px;
    gap: 10px;

    position: absolute;
    width: 139px;
    height: 48px;
    left: 571px;
    top: 1900px;


    background:${PALLET_COLORS.primary.orange1};
    border-radius: 4px;
`