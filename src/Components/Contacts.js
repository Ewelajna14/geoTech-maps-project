import React from 'react'
import styled from 'styled-components';
import {BsTelephoneInbound } from 'react-icons/bs';
import {MdOutlineEmail } from 'react-icons/md';

function Contacts(){
    return(
        <Wrapper>
            <ContactRow>
                <ContactColumn>
                  <Icon/><li>Call Us: ( 111-111-1111)</li>
                  <IconEmail/><li>Send an Email: contact@contact.net</li>
                </ContactColumn>
            </ContactRow>
        </Wrapper>
    )
}

export default Contacts

const Wrapper = styled.div`
background-image: linear-gradient(#F1F2B5,#135058 );
display: block;
  margin-left: auto;
  margin-right: auto;
  height: 80vh;
  width:100vw;
  height: 100vh;
`

const ContactRow=styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-gap: 30px;
`

const ContactColumn=styled.p`
    color:black;
    font-size:1.5rem;
    font-family: "Trattatello", cursive;
    font-weight:bold;

li{
    list-style-type: none;
    margin-left: 1rem;
}
`

const Icon = styled(BsTelephoneInbound)`
margin-right: 0.5rem;
margin-left: 1rem;
`
const IconEmail = styled(MdOutlineEmail)`
margin-right: 0.5rem;
margin-left: 1rem;
`