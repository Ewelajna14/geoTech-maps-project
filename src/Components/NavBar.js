import React from 'react'
import styled from 'styled-components';

function NavBar(){
    return(
        <Wrapper>
            <Title>Maps</Title>
        </Wrapper>
    )
}

export default NavBar

const Wrapper=styled.nav`
background-image: url("header-4.png");
height:90px;
display:flex;
justify-content:center;
align-items:center;
margin-bottom:20px;

`
const Title=styled.h1`
text-align: center;
font-size:40px;
color:white;
`