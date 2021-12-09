import React from "react";
import styled from 'styled-components';

function InfoSection(){
    return(
        <Section>
            <InfoRow>
                <InfoColumn>
                    <h4>Styled components have a similar style to SASS in terms of nesting. However, there are so many additional benefits of using styled components that you wouldn't be able to get from regular CSS.You can install styled components into your project with the following code.</h4>
                </InfoColumn>
                <InfoColumn>
                    <h1>Here is going to be an image</h1>
                </InfoColumn>
            </InfoRow>
        </Section>   
    )
}

export default InfoSection

const Section = styled.div`
background-color: #a3b18a;
padding: 50px 0;
`

const InfoRow=styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
grid-gap: 30px;
`
const InfoColumn=styled.div`

padding:30px;
`