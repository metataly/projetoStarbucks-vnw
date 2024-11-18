import Header from "../Header/Header";
import starImg from "../../assets/imgs/cafe.png"
import {MainStyle, SectionStyle, ButtonStyle, H3Style, H2Style} from './style';

export default function Novidades() {
    return (
            <MainStyle>
            <SectionStyle>
                <H3Style>PREPARAÇÃO</H3Style>
                <H2Style>Níveis de torra</H2Style>
                <p>Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
                <ButtonStyle>SAIBA MAIS</ButtonStyle>
            </SectionStyle>
            
            <img src={starImg} alt="Grão de Café" />
        </MainStyle>

    )
}