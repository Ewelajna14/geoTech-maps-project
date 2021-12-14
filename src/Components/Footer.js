import React from 'react'
import styled from 'styled-components';
import { FaMapMarkedAlt } from 'react-icons/fa';

function Footer(){
    return(
        <FooterContainer>
            <Icon/>
           <h3> GeoTech Maps</h3>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer=styled.footer`
background-color:#3A5A40;
height:60px;
width:100vw;
display:flex;
justify-content:left;
align-items:center;
h3{
    color:white;
}
`
const Icon = styled(FaMapMarkedAlt)`
margin-right: 0.5rem;
margin-left: 1rem;
color:white;
`