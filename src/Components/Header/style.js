import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const HeaderStyle = styled.header `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1vw 5vw;
    font-family: "Poppins";
`;

export const NavStyle = styled.nav `
    width: 35vw;
`;

export const Navlist = styled.ul `
    display: flex;
    justify-content: space-around;
    list-style: none;
`;

export const LinkStyle = styled(Link) `
    text-decoration: none;
    color: black;

    &:hover {
      color: #007C43;
    }
`;