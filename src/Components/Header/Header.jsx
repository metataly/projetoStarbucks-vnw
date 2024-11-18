import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png"
import {HeaderStyle, Navlist, NavStyle, LinkStyle} from './style';

export default function Header() {
  return (
    <HeaderStyle>
      <img src={logo} alt="Logomarca starbucks" />
      <NavStyle>
        <Navlist>
          <li>
            <LinkStyle to="/">Home</LinkStyle>
          </li>
          <li>
            <LinkStyle to="/novidades">Novidades</LinkStyle>
          </li>
          <li>
            <LinkStyle to="/sobre">Sobre</LinkStyle>
          </li>
        </Navlist>
      </NavStyle>
    </HeaderStyle>
  );
}