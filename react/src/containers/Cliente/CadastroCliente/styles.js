import styled from 'styled-components';

export const DadosBasicosForm = styled.div`
width: 100%;
margin: 2%;

@media (max-width: 1400px) {
width: 90%;
margin: 0 5%;

}
`
export const ContatosForm = styled.div`
width: 100%;
max-height: 70vh;
display: flex;
flex-direction: column;
overflow-y: auto;
overflow-x: none;
scrollbar-width: auto;
align-items: center;
justify-content: start;

.divCabecalho{
width: 100%;
display: flex;
justify-content: start;
}

@media (max-height: 780px) {
max-height: 60vh;
}

.duplica{
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    }
`
export const SetoresForm = styled.div`
width: 100%;
max-height: 70vh;
display: flex;
flex-direction: column;
overflow: auto;
scrollbar-width: auto;
align-items: center;
justify-content: start;

.divCabecalho{
width: 100%;
display: flex;
justify-content: start;
}

#thSetor{
    width: 10%;
}

@media (max-height: 780px) {
max-height: 60vh;
}


.duplica{
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    }
`
export const ViagensForm = styled.div`
width: 100%;
max-height: 70vh;
display: flex;
flex-direction: column;
overflow: auto;
scrollbar-width: auto;
align-items: center;
justify-content: start;

.divCabecalho{
width: 100%;
display: flex;
justify-content: start;
}

@media (max-height: 780px) {
max-height: 60vh;
}

.duplica{
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    }

`
export const InformacoesUsuario = styled.div`
width: 100%;


#buttonsBottom{
    margin-top: 30px;
    display: none;
}

@media (max-width: 1400px) {
   #buttonsBottom{
    display: block;
   }
}


#btnCadastro {
    background: linear-gradient(to bottom right, #02005e, #001e52, #010236);
    width: 150px;
}

#btnCadastro:hover {
    opacity: 0.9;
}

.error-message {
    font-size: 12px;
    color: red;
}

#addViagemBtn,
#addContBtn,
#addSetorBtn {
    background-color: rgba(97, 97, 97, 0.253);
    padding: 2px;
    border: none;
    color: #000000;
    margin-top: 3px;
}
.fieldRequired {
    color: red;
}
.btnDuplica {
    float: right;
}
`
export const H2 = styled.h2`
font-size: 20px;
font-weight: 400;
`
export const Buttons = styled.div`
width: 100%;
`
