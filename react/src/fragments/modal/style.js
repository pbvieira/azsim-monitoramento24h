import styled from 'styled-components';

export const HeaderModal = styled.div`
display: flex;
flex-direction: column;
/* justify-content: center;
align-items: center; */
`
export const Navbar = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
min-height:60px ;
background: linear-gradient(to bottom right, #02005e, #001e52);
color: #FFF;
`
export const Informacoes = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;
width: 100%;
min-height:90px ;
background: linear-gradient( #d1d1d1, #d0d0d0);
color: #000;
padding: 05px 10px;
font-weight: 500;
`

export const Infos = styled.div`

`
export const BodyModal = styled.div`
display: flex;
flex-direction: row;
`

export const Formulario = styled.div`
width: 50%;
padding: 10px;
`
export const InformacoesTabs = styled.div`
width: 50%;
color: #000;
text-decoration: none;
`
export const Tabs = styled.div`
width: auto;
display: inline;
justify-content: center;
align-items: center;
margin: 0;
`

export const FundoContatos = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
overflow-y: auto;
scrollbar-width: auto;
max-height: 100vh;


.cardsTeste{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    max-height: 550px;
}
`

export const CardContatos = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background: linear-gradient( #d1d1d1, #d0d0d0);
padding: 20px;
border-radius: 8px;
margin-bottom: 10px;


`
export const CardSetores = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background: linear-gradient( #d1d1d1, #d0d0d0);
padding: 20px;
border-radius: 8px;
margin-bottom: 10px;

`
export const Row = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: start;
background: linear-gradient( #d1d1d1, #d0d0d0);
`
export const FundoSetores = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
overflow-y: auto;
scrollbar-width: auto;

.cardsTeste{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    max-height: 550px;
}
`
export const CardHeaderSetores = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
overflow-y: auto;
width: 70%;
height: 10%;
background: #454545;
color: #FFF;
margin-top: 20px;
margin-bottom: 20px;
border-radius: 8px;
padding: 10px;
`

export const FundoViagem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;
overflow-y: auto;
scrollbar-width: auto;
max-height: 100vh;


.cardsTeste{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    max-height: 550px;
}
`

export const CardViagem = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
overflow-y: auto;
width: 90%;
height: 10%;
color: #000;
margin-top: 20px;
margin-bottom: 20px;
border-radius: 8px;
padding: 10px;
`

export const RowViagem = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: start;
background: linear-gradient( #d1d1d1, #d0d0d0);
padding: 20px;
border-radius: 8px;
white-space: nowrap;


div{
    max-width: 80%;
    
}
`
