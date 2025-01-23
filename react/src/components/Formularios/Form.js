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
min-width: 100%;
max-width: 100%;
border-radius: 8px;
padding: 10px;
overflow-y: auto;
scrollbar-width: auto;
`
export const Row = styled.div`
width: 100%;
display: flex;
gap: 10px;
margin: 10px;

.inputComLabel{
  width: 100%;
}
`

export const Card = styled.div`
min-width: 32%;
max-width: 32%;
position: relative;
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

  .div{
    max-width: 95%;
    min-width: 95%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

    h6 {
      margin: 0;
      min-width: 100%;
      max-width:100%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

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

.btnOptions{
background-color: transparent;
color:rgb(0, 0, 0);
border : none;
display: flex;
align-items: center;
width: auto;

:hover{
    background-color: transparent;
    opacity: 0.7;
}
:active{
    background-color: transparent;
    opacity: 0.9;
    border: none!important;
    color:rgb(0, 0, 0);
}

span{
    font-size: 25px;
}
}
`

export const Input = styled.input`

`
export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 5%;
`;


export const DropdownContent = styled.div`
  display: ${prop => (prop.show ? 'flex!important' : 'none!important')};
  min-width: 150px!important;
  max-width: 150px!important;
  height: 100px!important;
  padding: 05px;
  text-align: left;
  position: absolute;
  margin-top: 0px;
  margin-left: 0px;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid  #f0f0f0;
  z-index: 99;
`;

export const DropdownItem = styled.button`
  width: 100%;
  color: black;
  border: none;
  text-decoration: none;
  display: block;
background-color:${prop => (prop.excluir ? '#dc3545!important' : 'gray!important')};
margin: 1px 0px;
color: #fff;
border-radius: none!important;

  &:hover {
opacity: 0.7;
color: #fff;
}
`;

export const Options = styled.div`
width: auto!important;
position: relative;
`