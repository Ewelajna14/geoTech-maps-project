import React from 'react'
import styled from 'styled-components';
import {BsTelephoneInbound } from 'react-icons/bs';
import {MdOutlineEmail } from 'react-icons/md';

function Contacts(){
    return(
        <Wrapper>
            <ContactRow>
                <ContactColumn>
                  <p><Icon/>Call Us: ( 111-111-1111)</p>
                 <p><IconEmail/>Send an Email: contact@contact.net</p>
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
`

const ContactRow=styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-gap: 30px;
`

const ContactColumn=styled.div`
p{
    color:black;
    font-size:20px;
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