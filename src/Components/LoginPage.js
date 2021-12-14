import Recat from 'react';
import {useHistory} from "react-router-dom";
import styled from 'styled-components';

function LogIn(){

    const history=useHistory();

    function handleClick(){
        history.push("/maps")
    }

    return(
        <Background>
            <Container>
               <Text>WELCOME</Text>
               <InputContainer>
                       <input type="text" placeholder=" User name"/>
                       <input type="password" placeholder="Password"/>  
               </InputContainer>
               <ButtonContainer>
                        <button onClick={handleClick}>Sign In</button>
               </ButtonContainer>
            </Container>
          
        </Background>
    )
}

export default LogIn 

const Background=styled.body`
background-image: linear-gradient(#F1F2B5,#135058 );
background-size:cover;
margin:0;
padding:0;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
`

const Container = styled.div`
display:flex;
align-items:center;
flex-direction:column;
height:70vh;
width:40vh;
background: rgba(255, 255, 255, 0.15);
border-radius:15px;
`

const Text=styled.h2`
margin: 3rem;
font-family: "Trattatello", cursive;
`
const InputContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
height:20%;
width:100%;
input{
background: rgba(255, 255, 255, 0.15);
border-radius: 15px;
width 80%;
height:3rem;
padding 1rem;
border:none;
margin: 5px;
outline:none;
font-size:1rem;
font-family: "Trattatello", cursive;
font-weight:bold;
}
`
const ButtonContainer=styled.div`
margin:2rem;
display:flex;
align-items:center;
justify-content:center;
width:100%;
button{
background: linear-gradient(to right, #76b852,#8DC26F );
text-transform:uppercase;
font-family: "Trattatello", cursive;
width:50%;
height:2rem;
border-radius:15px;
border:none;
cursor: pointer;
}
`

