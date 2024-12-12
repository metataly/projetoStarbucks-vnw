import styled from 'styled-components';

export const MainStyle = styled.main `
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5vw;
    background-color: #1E3932;
    height: 100vh;

    @media (max-width: 900px) {
        flex-direction: column;
        font-size: 1.1em;
    }

`;


export const SectionStyle = styled.section `
    width: 35vw;
    color: white;
    font-family: "Poppins";
    text-align: justify;


    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const ButtonStyle = styled.button `
    background-color: #037143;
    color: white;
    border-radius: 30px;
    padding: 1vw 4vw;
    margin: 1vh 0;
    font-family: "Inter";
    cursor: pointer;

    &:hover{
        background-color: rgba(3, 113, 67, 0.7);
    }
`;

export const H3Style = styled.h3 `
    font-family: "Inter";

    @media (max-width: 900px) {
        font-size: 0.8em;
    }
`;

export const H2Style = styled.h2 `
    font-size: 3em;
    font-weight: 400;
    margin: 0;

    @media (max-width: 900px) {
        font-size: 2.5em;
    }
`;
