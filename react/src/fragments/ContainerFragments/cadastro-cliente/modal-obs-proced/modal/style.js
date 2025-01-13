import styled from "styled-components";

export const Background = styled.div`
top: 0;
left: 0;
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
width: ${prop => prop.procedimento === true ? '60vw' : '25vw'};
height: 60vh;
display: flex;
flex-direction: ${prop => prop.procedimento === true ? 'row' : 'column'};
border-radius: 8px;
align-items: start;
justify-content: start;
position: fixed;
padding: 20px;
gap: 2;
text-align: start;
overflow-y: auto;
scrollbar-width: auto;

h5{
    text-align: start;
    font-weight: 600;
  }

#btnFechar{
    width: auto;
    padding: 0px 10px;
    margin: 5px 0px;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    background-color: #d0d0d0;
    color: #000;
    font-weight: 600;
    position: absolute;
    top: 0px;
    right: 10px;
}
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

`
export const ConteudoObs = styled.div`
   height : 90%;
   width: 90%;
   word-wrap: break-word;
   overflow-wrap: break-word;
   white-space: normal; 
   background-color: #d0d0d0;
   border-radius: 8px;
   padding: 10px;
   text-transform: capitalize;
`
export const Title = styled.div`
width: 90%;
margin-left: 03%;
display: flex;
flex-direction: row;
justify-content: start;
`