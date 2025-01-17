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
background:  #1d4b96;
color: #FFF;
`
export const Informacoes = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
align-items: center;
width: 100%;
min-height:90px ;
background: lightgray;
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
max-height: 100vh;
padding: 10px;
display: flex;

form{
    overflow-y: auto;
scrollbar-width: auto;
}

`
export const InformacoesTabs = styled.div`
width: 50%;
color: #000;
text-decoration: none;
`
export const Tabs = styled.div`
width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    min-height: 40px;

    ul{
        list-style: none;
        border-bottom: none;
        
         button{
        color: #000;
        }

    }


.nav-link{
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #000;
    border-radius: 0px!important;
    &:hover {
        background: #f9f9f9;
    }}


    .nav-link.active{
        background: #f0f0f0;
        border-bottom: 2px solid #000;

    }

`

export const FundoContatos = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
overflow-y: auto;
scrollbar-width: auto;
max-height: 100vh;


.contentTabs{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
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
background:rgba(214, 214, 214, 0.63);
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
background:rgba(214, 214, 214, 0.63);;
padding: 20px;
border-radius: 8px;
margin-bottom: 10px;

`
export const CardViagem = styled.div`
width: 80%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background:rgba(214, 214, 214, 0.63);;
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
background: transparent;
`
export const FundoSetores = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
overflow-y: auto;
scrollbar-width: auto;

.contentTabs{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
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
width: 80%;
height: 10%;
background:rgb(69, 69, 69);
color: #FFF;
margin-top: 20px;
margin-bottom: 20px;
border-radius: 8px;
padding: 10px;
`

export const FundoViagem = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
overflow-y: auto;
scrollbar-width: auto;


.contentTabs{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    max-height: 550px;
}
`



export const RowViagem = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: start;
padding: 20px;
border-radius: 8px;
white-space: nowrap;


div{
    max-width: 80%;
    
}
`
