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
`

export const Main = styled.main`
display: flex;
flex-direction: row;
width: 100%;
height: 88%;
justify-content: center;
gap: 1%;
`

export const Eventos = styled.div`
width: 77%;
height: 100%;
background-color: #FFF;
border-radius: 8px;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
overflow-y: auto;
scrollbar-width: auto;

.header {
        background-color: #FFF;
        font-size: 20px;
        font-weight: 600;
        border-left: 10px solid #FFF;
    }
`
export const Ocorrencias = styled.div`
width: 20%;
padding: 20px;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
background-color: #FFF;
border-radius: 8px;
overflow-y: auto;
scrollbar-width: auto;
gap: 20px;
`

export const Row = styled.div`
width: 98%;
height: 03%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
padding:30px 0px;
margin-bottom: 10px;
background-color: #f4f4f4;
border-radius: 8px;
text-transform:uppercase;
white-space: nowrap;
font-size: 70%;
font-weight: 600;
`

export const DataEvento = styled.div`
width: 16.66%;
text-overflow: ellipsis;
overflow: hidden;
text-align: center;
`
export const CodificadorEvento = styled.div`
width: 8%;
text-overflow: ellipsis;
overflow: hidden;
text-align: center;
`
export const StatusEvento = styled.div`
width: 16.66%;
text-overflow: ellipsis;
overflow: hidden;
text-align: center;
`
export const DeStatus = styled.div`
width: 16.66%;
text-overflow: ellipsis;
overflow: hidden;
`
export const NomeEvento = styled.div`
width: 24%;
text-overflow: ellipsis;
overflow: hidden;
`
export const CidadeEvento = styled.div`
width: 16.66%;
text-overflow: ellipsis;
overflow: hidden;
position: relative;
`
export const CardDiv = styled.div`
width: 100%;
min-height: 12%;
text-overflow: ellipsis;
overflow: hidden;
font-size: 15px;
font-weight: 600;
text-align: start;
cursor: pointer;
transition: 0.2s opacity ease-in-out;
border-left: 10px solid red;
border-radius: 8px 8px 8px 8px;

&:hover{
    opacity: 0.8;
}

&:active{
    opacity: 0.9;}
`

export const CardBody = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
text-align: start;
background-color: #f4f4f4;
padding: 20px;
white-space: nowrap;
gap: 10px;
`
export const DescricaoOcorrencia = styled.div`
text-overflow: ellipsis;
display: flex;
overflow: hidden;
height: auto;
justify-content: space-between;
width: 100%;
`
export const NomeOcorrencia = styled.div`
text-overflow: ellipsis;
overflow: hidden;
max-width: 90%;
height: auto;
`
