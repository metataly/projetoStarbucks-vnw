import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const HeaderStyle = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1vw 5vw;
    font-family: "Poppins";

    @media (max-width: 780px) {
        height: 30vh;
        margin: 0;
        justify-content: space-evenly;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
     }

`;

export const NavStyle = styled.nav `
    width: 35vw;

    @media (max-width: 900px){
        margin-right: 5vw;
    }
`;

export const Navlist = styled.ul `
    display: flex;
    justify-content: space-around;
    list-style: none;

    @media (max-width: 900px) {
        font-size: 1.6em;
    }

    @media (max-width: 780px) {
        display: flex;
        flex-direction: column;
        font-size: 1.7em;
    }

`;

export const LinkStyle = styled(Link) `
    text-decoration: none;
    color: black;

    &:hover {
      color: #007C43;
    }

    @media (max-width: 900px) {
        padding: 1.5vw;
    }

`;