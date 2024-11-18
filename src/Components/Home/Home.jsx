import { useState } from "react";
import Header from "../Header/Header";
import CupImg from "../../assets/imgs/laranja2x 1.png"
import CupImg2 from "../../assets/imgs/amarelo2x 1.png"
import CupImg3 from "../../assets/imgs/vermelho2x 1.png"
import CupBg from "../../assets/imgs/Ellipse 1.png"
import CupBg2 from "../../assets/imgs/Ellipse 2.png"
import CupBg3 from "../../assets/imgs/Ellipse 3.png"
import Cup2  from "../../assets/imgs/amarelo 1.png"
import Cup3  from "../../assets/imgs/vermelho 1.png"
import Cup1  from "../../assets/imgs/laranja 3.png"
import {MainStyle, SectionStyle, ButtonStyle, H2Style, SpanStyle, CupSection, Cup, Background, DivStyle, CupMove} from './style';

export default function Home() {

    const [cupImage, setCupImage] = useState(CupImg);
    const [bgImage, setBgImage] = useState(CupBg);

    const CupClick = (tipoCup) => {
        switch (tipoCup) {
          case 'cup1':
            setCupImage(CupImg); 
            setBgImage(CupBg);
            break;
          case 'cup2':
            setCupImage(CupImg2);
            setBgImage(CupBg2);
            break;
          case 'cup3':
            setCupImage(CupImg3);
            setBgImage(CupBg3);
            break;
          default:
            setCupImage(CupImg);
            setBgImage(CupBg);
        }
      };

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
                    <Cup src={cupImage} alt="Copo do Starbucks" />
                    <Background src={bgImage} alt="Fundo redondo" />
                </CupSection>
            </MainStyle>
            <DivStyle>
                <CupMove src={Cup1} alt="Copo laranja" onClick={() => CupClick('cup1')}  />
                <CupMove src={Cup2} alt="Copo amarelo" onClick={() => CupClick('cup2')} />
                <CupMove src={Cup3} alt="Copo vermelho" onClick={() => CupClick('cup3')} />
            </DivStyle>
        </>
    )
}