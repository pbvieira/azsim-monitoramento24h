import styled from "styled-components";

export const Background = styled.div`
height: 100vh;
width: 100vw;
z-index: 999;
background-color: rgba(0,0,0,0.6);
position: absolute;
display: flex;
align-items: center;
justify-content: center;
`

export const Container = styled.div`
background: #FFF;
width: 25vw;
max-height: 60vh;
display: flex;
flex-direction: column;
border-radius: 8px;
align-items: start;
justify-content: start;
position: fixed;
padding: 20px;
gap: 2;
text-align: start;
overflow-y: auto;
scrollbar-width: scroll;

#btnAdicionar{
    width: auto;
    font-size: 15px;
    padding: 10px 20px;
    border: none;
    color: #FFF;
    font-weight: 500;
}

#btnCancelar{
    width: auto;
    font-size: 15px;
    padding: 10px 20px;
    border: none;
    color: #FFF;
    font-weight: 500;
}

#btnFechar{
    width: auto;
    font-size: 30px;
    border: none;
    color: #d0d0d0;
    font-weight: 500;
    position: absolute;
    top: 0px;
    right: 10px;
}
`

export const Form = styled.div`
min-height: 90%;
max-height: 90%;
overflow-y: auto;
scrollbar-width: auto;
width: 100%;
`

export const Title = styled.div`
width:100%;
padding-left: 20px;
`

export const Input = styled.input`
width: 50%;
height: 100%;
border: 1px solid #d0d0d0;
border-radius: 8px;
padding: 10px;

`
export const Row = styled.div`
width: 98%;
height: 15%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
padding:10px 10px;
gap: 05px;
background-color: transparent;
border-radius: 8px;
text-transform:uppercase;
white-space: nowrap;
font-size: 70%;

.textAreaModal{
    width: 100%;
min-height: 100px;
border: 1px solid #d0d0d0;
border-radius: 8px;
padding: 10px;
}

textarea{
width: 50%;
border: none;
border-radius: 8px;
padding: 10px;
}
`
export const Buttons = styled.div`
display: flex;
justify-content: start;
gap: 2%;
bottom: 10px;
margin-top: 2%;
left: 10px;
`