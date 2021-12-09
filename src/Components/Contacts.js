import React from 'react'
import styled from 'styled-components';

function Contacts(){
    return(
        <Wrapper>
            <ContactRow>
                <ContactColumn>
                 <h3>Call Us: ( 111-111-1111)</h3>
                 <h3>Send an Email: contact@contact.net</h3>
                </ContactColumn>
            </ContactRow>
        </Wrapper>
    )
}

export default Contacts

const Wrapper = styled.div`
background-color: #2f3e46;
`

const ContactRow=styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-gap: 30px;
`

const ContactColumn=styled.div`
padding:30px;
h3{
    color:white;
}
`