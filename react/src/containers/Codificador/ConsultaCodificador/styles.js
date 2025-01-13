import styled from 'styled-components';

export const ButtonFiltro = styled.button`
width: 50px;
height: 50px;
margin-left: 10px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
border: none;
background-color: #d0d0d0;

&:hover{
    opacity: 0.6;
}
&:active{
    opacity: 0.9;
}

.material-symbols-outlined{
    font-size: 1.3rem;
}
`

export const FiltrosDeOS = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: row;
justify-content: start;
align-items: center;
border-radius: 10px;
`
export const Input = styled.input`
width: 40%;
height: 50px;
border-radius: 5px;
border: 1px solid rgba(0, 0, 0, 0.30);
margin: 2px;
color: #000;
padding: 10px;
text-transform: uppercase;
`

export const Exibicao = styled.div`
min-height: 85%;
width: 100%;
border: 1px solid #d0d0d0;
border-radius: 8px;
padding: 10px;
overflow-y: auto;
scrollbar-width: auto;

.headerConsulta {
        background-color: #FFF;
        font-size: 20px;
        font-weight: 600;
    }
`

export const Legenda = styled.div`
display: flex;
width: 100%;
height: 2%;
gap: 10px;
align-items: center;

div{
    display: flex;

    span{
        height: 100%;
        display: flex;
        align-items: baseline;
    }
}
`

export const Codificador = styled.div`
width: 14.16%;
`
export const Cliente = styled.div`
width: 15%;`

export const DataCadastro = styled.div`
width: 14.16%;
`
export const VerMais = styled.div`
width: 14.16%;`

export const DataEncerramento = styled.div`
width: 14.16%;`

export const Unidade = styled.div`
width: 14.16%

`
export const EmUso = styled.div`
width: 14.6%;
`
