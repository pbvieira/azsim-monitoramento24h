import styled from "styled-components";

export const Header = styled.div`
width: 98%;
display: flex;
flex-direction: row;
align-items: baseline;
justify-content: space-between;
gap: 10px;
margin-top: 1%;

h2{
    color: #000;
}

h5{
    color: #5f5f5f;
}

a{
    text-decoration: none;
    cursor: pointer;
    color: #5f5f5f;
}
`
export const TextEsquerda = styled.div`
display: flex;
gap: 10px;
align-items: baseline;
`
export const TextDireita = styled.div`
display: flex;
gap: 10px;
align-items: baseline;
`