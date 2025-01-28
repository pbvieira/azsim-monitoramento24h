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
width: 20vw;
height: 20vh;
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
scrollbar-width: auto;

@media (max-width: 1400px) {
width: 37vw;
height: 30vh;
}

`
export const Title = styled.div`


`

export const Buttons = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
gap: 2%;

button{
    padding: 05px 30px;
    border: none;
    border-radius: 8px;
}
`