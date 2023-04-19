import styled from "styled-components";

type Props = {
    fontSize: number;
}


export const TitleBig = styled.h1<Props>`
    font-style: italic;
    font-weight: 700;
    font-size: ${props => props.fontSize}px;
    line-height: 38px;
    text-align: center;
    text-transform: uppercase;
    color: #1C1C1E;

`