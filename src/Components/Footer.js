import React from 'react'
import styled from 'styled-components';

function Footer(){
    return(
        <FooterContainer>Footer</FooterContainer>
    )
}

export default Footer

const FooterContainer=styled.footer`
background-color:#3A5A40;
height:60px;
display:flex;
justify-content:left;
align-items:center;
`