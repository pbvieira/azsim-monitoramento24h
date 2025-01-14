import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 94.4vh;
background-color: #f5f5f5;
margin-top: 60px;
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
justify-content: center;

@media (max-width: 1400px) {
height: 92vh;
}

.headerConsulta{
    width: 98%;
    justify-content: start;
    display: flex;
}

input{
    width: 100%;
}

    `
export const Fundo = styled.div`
width: 98%;
height: 88%;
background-color: #FFF;
color: #000;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: start ;
align-items: center ;
padding: 20px;
overflow-y: scroll;
row-gap: 20px;
gap: 20px;
scrollbar-width: auto;

@media (max-width: 1400px) {
   #buttons{
    display: none;
   }
}

label{
    font-size: 15px;
    font-weight: 500;
}
`
export const Formulario = styled.div`
min-height: 90%;
height: 90%;
width: 100%;
border-radius: 8px;
padding: 10px;
overflow-y: auto;
scrollbar-width: auto;
`
export const Row = styled.div`
display: flex;
gap: 10px;
margin: 10px;

`

export const Card = styled.div`
min-width: 32%;
max-width: 32%;
height: auto;
justify-content: start;
align-items: start;
display: flex;
flex-direction: column;
padding: 10px;
gap: 20px;
border: 1px solid #d0d0d0;
border-radius: 8px;
white-space: nowrap;
text-overflow: ellipsis;

.btnExluir{
background-color: transparent;
color: #9f0000;
border : none;

:hover{
    background-color: transparent;
    opacity: 0.7;
}
:active{
    background-color: transparent;
    opacity: 0.9;
    color: #9f0000;
}
}

div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h6{
    margin: 0;
    width: auto;
    max-width: 50%;
    text-overflow: ellipsis;
    overflow: hidden;
}
`

export const Input = styled.input`

`

