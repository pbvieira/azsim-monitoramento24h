import styled from 'styled-components';

export const Table = styled.table`
width: 90vw;

input{
 cursor: pointer;
 font-size: 15px;
 font-weight: 500;
 border-radius: 0px;
 background: #FFF!important;
}
`
export const Thead = styled.div`
`
export const Th = styled.div`
width: ${prop => prop.tab === 'contatos' ? '18%' : prop.tab === 'setores' ? '45%' : prop.tab === 'viagem' ? '50%' : ''} ;
overflow: auto;
text-overflow: ellipsis;
`

export const ButtonEdit = styled.button`
height: 40px;
border-radius: 8px;
width: 40px;
border: none;
display: flex;
align-items: center;
justify-content: center;
color: #35abe9;

:hover{
  color: #35abe9;
  opacity: 0.5;
}

`
export const ButtonDelete = styled.button`
height: 40px;
border-radius: 8px;
width: 40px;
border: none;
display: flex;
align-items: center;
justify-content: center;
color: #e93635;

:hover{
  color: #e93635;
  opacity: 0.5;
}

`
export const ButtonObs = styled.button`
height: 40px;
border-radius: 8px;
width: 40px;
border: none;
display: flex;
align-items: center;
justify-content: center;
color: #35abe9;

:hover{
  color: #35abe9;
  opacity: 0.5;
}

.material-symbols-outlined{
  padding: 2px;
  border-radius: 8px;
}
`
export const ContatoInteiro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2%;
  justify-content: start;
  align-items: center;
  position: relative;

  #thButtonAction {
    display: flex;
    width: 8%;
    flex-direction: row;
    right: 0;
    gap: 5px;
    margin-bottom: 7px;
    background: #FFF!important;
    border-radius: 8px;

    @media (max-width: 1024px) {
      width: 17%;
    }

    @media (min-width: 1279px) {
  width: 13% ;
    }

    @media (min-width: 1300px) {
      width: 12%;
    }
  }
`;

export const SetorInteiro = styled.div`
width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2%;
  justify-content: start;
  align-items: center;
  position: relative;
  
  #thButtonAction {
    display: flex;
    width: 10%;
    flex-direction: row;
    right: 0;
    gap: 5px;
    margin-bottom: 7px;
    background: #FFF!important;
    border-radius: 8px;

    @media (max-width: 1024px) {
      width: 17.5%;
    }

    @media (min-width: 1300px) {
      width: 12.5%;
    }

    @media (min-width: 1279px) {
  width: 16% ;
}
  }
`
export const ViagemInteira = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2%;
  justify-content: start;
  align-items: center;
  position: relative;

  #thButtonAction {
    display: flex;
    width: 20%;
    flex-direction: row;
    right: 0;
    gap: 5px;
    margin-bottom: 7px;
    background: #FFF!important;
    border-radius: 8px;

    @media (min-width: 1024px) {
      width: 37.5%;
    }

    @media (min-width: 1300px) {
      width: 25%;
    }

    @media (min-width: 1279px) {
  width: 30% ;
}
}

`

export const TextAreasViagem = styled.div`
display: flex;
min-width: 100%;
gap: 10px ;

div{
    width: 50%;
}
`

export const RowCabecalho = styled.div`
font-size: 15px;
width: 100%;
height: auto;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
padding: 5px 5px;
margin-bottom: 10px;
background-color: #f4f4f4;
border-radius: 2px;
text-transform:uppercase;
white-space: nowrap;
font-weight: 600;
gap: 10px;

#acoesContatos{
  width: 8% ;
}
#acoesSetores{
  width: 10% ;
}
#acoesViagens{
  width: 20% ;
}

@media (max-width: 1024px) {
  #acoesContatos{
  width: 17% ;
}
#acoesSetores{
  width: 17.5% ;
}
#acoesViagens{
  width: 37.5% ;
}
}

@media (min-width: 1279px) {
  #acoesContatos{
  width: 12% ;
}
#acoesSetores{
  width: 15.5% ;
}
#acoesViagens{
 width: 28%;
}
}
`
export const Input = styled.input`
border: none;
height: 100%;
`

export const Tbody = styled.div`
width: 100%;
`

export const InformacaoContato = styled.div`
width: 100%;
display: flex;
`
export const InformacaoSetor = styled.div`
width: 100%;
display: flex;
gap: 10px;
`
export const InformacaoViagem = styled.div`
width: 100%;
display: flex;
gap: 10px;
`

export const Observacao = styled.div`
width: 100%;
align-items: start;
justify-content: start;

#thObs{
    width: 80%;
}
`

