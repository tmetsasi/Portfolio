import styled from "styled-components";

const StyledMenu = styled.div`
width: 50%;
height: 6rem;
`;

export const Testi = (props) => { 
    return ( 
        <StyledMenu> 
            Valinta {props.luku}: {props.name}
        </StyledMenu>
    )
}