import Header from "../Header/Header";
import CupImg from "../../assets/imgs/laranja2x 1.png"
import CupBg from "../../assets/imgs/Ellipse 1.png"
import Cup1  from "../../assets/imgs/amarelo 1.png"
import Cup2  from "../../assets/imgs/vermelho 1.png"
import Cup3  from "../../assets/imgs/laranja 3.png"
import {MainStyle, SectionStyle, ButtonStyle, H2Style, SpanStyle, CupSection, Cup, Background, DivStyle, CupMove} from './style';

export default function Home() {
    return (
        <>
            <MainStyle>
                <SectionStyle>
                    <H2Style>Mais que Café</H2Style>
                    <H2Style>Isso  é <SpanStyle>Starbucks</SpanStyle></H2Style>
                    <p>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
                    <ButtonStyle>SAIBA MAIS</ButtonStyle>
                </SectionStyle>
                <CupSection>
                    <Cup src={CupImg} alt="" />
                    <Background src={CupBg} alt="" />
                </CupSection>
            </MainStyle>
            <DivStyle>
                <CupMove src={Cup1} alt="" />
                <CupMove src={Cup2} alt="" />
                <CupMove src={Cup3} alt="" />
            </DivStyle>
        </>
    )
}