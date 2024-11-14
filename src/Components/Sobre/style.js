import styled from 'styled-components';

export const MainStyle = styled.main `
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5vw;
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

    &:hover{
        background-color: rgba(3, 113, 67, 0.7);
    }
`;

export const H3Style = styled.h3 `
    font-family: "Inter";
`;

export const H2Style = styled.h2 `
    font-size: 3em;
    font-weight: 400;
    margin: 0;
`;