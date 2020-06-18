
import styled from 'styled-components';

export const FullW = styled.div`
margin: 0;
padding: 0;
width: 100vw;
height: 100vh;
maxWidth: 100vw;
maxHeight: 100vh;
background-color: ${props=>props.colore  || "#FF00FF"};
overflow: auto;
`;
export const ButtonColor = styled.span`
width: 2vw;
height: 3vh;
background-color: ${props=>props.colore};
border: 1px solid black;
`;