import styled from 'styled-components';

export const MainStyle = styled.main `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 5vw;
`;

export const SectionStyle = styled.section `
    width: 35vw;
    color: #1E3932;
    font-family: "Poppins";
    text-align: justify;
`;

export const ButtonStyle = styled.button `
    background-color: #037143;
    color: white;
    border-radius: 30px;
    padding: 1vw 4vw;
    margin: 1vh 0;
    font-family: "Inter";
    cursor: pointer;
    font-size: 1em;

    &:hover{
        background-color: rgba(3, 113, 67, 0.7);
    }
`;

export const SpanStyle = styled.span `
    color:  #037143;
    font-weight: bold;
`;

export const H2Style = styled.h2 `
    font-size: 3em;
    font-weight: 400;
    margin: 0;
`;

export const CupSection = styled.section `
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
`;

export const Cup = styled.img `
    position: absolute;
    bottom: 5vh;
    width: 30vw;
`;

export const Background = styled.img `
    width: 40vw;
`;

export const DivStyle = styled.div `
   display: flex;
   width: 95vw;
   justify-content: center;
   position: absolute;
   top: 92vh;
`; 

export const CupMove = styled.img `
   cursor: pointer;
   transition: transform 0.3s ease;

   &:hover{
    transform: rotate(13deg);
    }
`; 
