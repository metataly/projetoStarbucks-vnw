import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png"
import {HeaderStyle, Navlist, NavStyle} from './style';

export default function Header() {
  return (
    <HeaderStyle>
      <img src={logo} alt="Logomarca" />
      <NavStyle>
        <Navlist>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/novidades">Novidades</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
        </Navlist>
      </NavStyle>
    </HeaderStyle>
  );
}