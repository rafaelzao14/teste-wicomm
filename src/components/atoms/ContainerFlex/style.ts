import styled from "styled-components";

type Container_Props = {
    height: number;
}

export const ContainerFlexGeneral = styled.div<Container_Props>`
    width: 100%;
    height: ${props => props.height}px;
    padding: 0 56px 0 56px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 32px;
`